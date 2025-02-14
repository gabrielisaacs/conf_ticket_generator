import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { VscCloudDownload } from 'react-icons/vsc';
import { FiMail } from 'react-icons/fi';
import { RxAvatar } from "react-icons/rx";
import { useTicket } from '../context/TicketContext';
import { CLOUDINARY_CONFIG } from '../utils/cloudinary';

const AttendeeDetails = ({ onBack, onSubmit }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const { ticketData, setTicketData } = useTicket();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm({
    defaultValues: {
      fullName: ticketData.fullName || '',
      email: ticketData.email || '',
      avatarUrl: ticketData.avatarUrl || '',
      specialRequest: ticketData.specialRequest || ''
    }
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // File validation
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      setUploadError('Please upload only JPG or PNG images');
      return;
    }

    if (file.size > maxSize) {
      setUploadError('Image size should be less than 10MB');
      return;
    }

    setUploading(true);
    setUploadError('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
    formData.append('folder', CLOUDINARY_CONFIG.folder);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Upload failed');
      }

      // Create the optimized URL by adding transformation parameters
      const optimizedUrl = data.secure_url.replace('/upload/', '/upload/w_500,h_500,c_fill/');

      setValue('avatarUrl', optimizedUrl);
      setUploadError('');

      setTicketData(prev => ({
        ...prev,
        avatarUrl: optimizedUrl,
        uploadTimestamp: Date.now(),
        uploaderLogin: 'gabrielisaacs'
      }));
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const onFormSubmit = (data) => {
    setTicketData({
      ...ticketData,
      ...data
    });
    onSubmit();
  };

  return (
    <div className='w-[43.75rem] h-max-content bg-[#041E23] border border-[#0E464F] rounded-[2rem] mt-[8rem] text-white p-[3rem]'>
      <div className="flex flex-row w-full items-center mb-2">
        <div className="text-[2rem] pageTitle">Attendee Details</div>
        <div className="text-[1rem] ml-auto">Step 2/3</div>
      </div>
      <div className="w-full h-[0.25rem] bg-[#0E464F] relative rounded-full mb-[2rem]">
        <div className="absolute h-full rounded-full bg-[#24a0b5] w-2/3"></div>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <div className="w-full h-max-content bg-[#08252B] border border-[#0E464F] rounded-[2rem] p-[1.5rem]">
          {/* Avatar Upload */}
          <div className="flex flex-col mb-[2rem] h-[20.5rem] w-full p-[1.5rem] border border-[#07373F] rounded-2xl gap-4 relative">
            <div className="flex justify-between">
              <p className='text-[1rem] mb-auto font-normal'>Upload Profile Photo *</p>
              {uploadError && (
                <span role="alert" className="text-red-500 text-sm">
                  {uploadError}
                </span>
              )}
            </div>
            <div className="w-full bg-black/20 h-[12.5rem] translate-y-[10%]" />
            <div
              onClick={() => document.getElementById('avatarUpload').click()}
              className="flex flex-col absolute border-[4px] border-[#24A0B5]/50 w-[15rem] h-[15rem] rounded-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-[43%] bg-[#0E464F] text-[#fafafa] justify-center items-center gap-3 cursor-pointer overflow-hidden group "
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  document.getElementById('avatarUpload').click();
                }
              }}
              aria-label="Upload profile photo"
            >
              <input
                type="file"
                id="avatarUpload"
                accept="image/png,image/jpeg,image/jpg"
                className="hidden"
                onChange={handleImageUpload}
                aria-label="Upload profile photo"
              />
              {watch('avatarUrl') ? (
                <>
                  <img
                    src={watch('avatarUrl')}
                    alt="Profile preview"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                    <VscCloudDownload size={32} aria-hidden="true" />
                    <p className="text-center text-[1rem] font-normal max-w-48">
                      Upload new photo
                    </p>
                  </div>
                </>
              ) : uploading ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#24A0B5]"></div>
                  <p>Uploading...</p>
                </div>
              ) : (
                <>
                  <VscCloudDownload size={32} aria-hidden="true" />
                  <p className="text-center text-[1rem] font-normal max-w-48">
                    Drag & drop or click to upload
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="w-full h-[0.25rem] bg-[#0E464F] rounded-full mb-[2rem]"></div>

          {/* Full Name Input */}
          <div className="mb-[2rem] flex flex-col gap-4">
            <label htmlFor="fullName">Enter your name *</label>
            <div className="relative">
              <input
                type="text"
                id="fullName"
                {...register('fullName', {
                  required: 'Full name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters'
                  }
                })}
                aria-invalid={errors.fullName ? "true" : "false"}
                className="w-full h-[3rem] bg-transparent border border-[#0e464f] text-white rounded-xl focus-within:outline-none p-4 pl-12 placeholder:text-white"
                placeholder="Gabriel Isaac"
              />
              <RxAvatar
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                size={20}
                aria-hidden="true"
              />
            </div>
            {errors.fullName && (
              <span role="alert" className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-[2rem] flex flex-col gap-4">
            <label htmlFor="email">Enter your email *</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className="w-full h-[3rem] bg-transparent border border-[#0e464f] text-white rounded-xl focus-within:outline-none p-4 pl-12 placeholder:text-white"
                placeholder="hello@gabrielisaac.co"
              />
              <FiMail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                size={20}
                aria-hidden="true"
              />
            </div>
            {errors.email && (
              <span role="alert" className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Special Request */}
          <div className="mb-[2rem] flex flex-col gap-4">
            <label htmlFor="specialRequest">Special request?</label>
            <textarea
              id="specialRequest"
              {...register('specialRequest')}
              className="w-full h-[7.94rem] bg-transparent border border-[#0e464f] text-white rounded-xl focus-within:outline-none p-4 placeholder:text-white"
              placeholder="Enter your request here..."
            />
          </div>

          {/* Form Actions */}
          <div className="flex flex-row gap-[1.5rem] w-full">
            <button
              type="button"
              onClick={onBack}
              className="w-full h-[3.25rem] hover:bg-[#24A0B5]/20 justify-center rounded-xl border border-[#24A0B5] text-[#24A0B5] text-[1rem] text-center transition-all duration-300"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={uploading}
              className="w-full h-[3.25rem] bg-[#24A0B5] justify-center rounded-xl border border-[#24A0B5] hover:bg-opacity-80 text-white text-[1rem] text-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get My Free Ticket
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;