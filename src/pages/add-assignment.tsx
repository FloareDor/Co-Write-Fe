import React, { useState } from 'react';
import axios from 'axios';
import NavbarDashboard from '@/components/navbar/navbarDashboard';

const AddAssignment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [aiLimits, setAiLimits] = useState('');
  const [resourceFile, setResourceFile] = useState<File | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('AI Limits:', aiLimits);
    console.log('Resource File:', resourceFile);
  };

  const sendToBE = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('ai_limitation', aiLimits);
    if (resourceFile) {
      formData.append('resource_file', resourceFile, resourceFile.name);
    }

    try {
      const response = await axios.post('http://157.245.240.148:8000/add-assignment', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `${localStorage.getItem('authToken')}`,
        },
      }).then((res) => {
        window.location.href = `/assignments/${res.data.assignment_id}`
    });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-bgmain flex flex-col min-h-screen w-screen">
      <div className="flex flex-col justify-center gap-0 fixed top-0 start-0 z-10">
        <NavbarDashboard />
      </div>
      <div className="flex flex-col justify-center items-center mt-16 px-20">
        <h1 className="text-4xl font-bold mb-8">Add Assignment</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Assignment Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Assignment Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="aiLimits" className="block text-gray-700 font-bold mb-2">
              AI Limits
            </label>
            <textarea
              id="aiLimits"
              value={aiLimits}
              onChange={(e) => setAiLimits(e.target.value)}
              className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="resourceFile" className="block text-gray-700 font-bold mb-2">
              Assignment Resource File
            </label>
            <input
              type="file"
              id="resourceFile"
              accept=".pdf,.docx,.txt"
              onChange={(e) => setResourceFile(e.target.files?.[0] || null)}
              className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-secondary-700 hover:bg-secondary-800 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              onClick={sendToBE}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssignment;