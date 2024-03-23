import React, { useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import axios from 'axios';

const AddAssignment = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [aiLimits, setAiLimits] = useState<string>('');
  const [resourceFile, setResourceFile] = useState<File | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('AI Limits:', aiLimits);
    console.log('Resource File:', resourceFile);
  };

  const sendToBE = async () => {
    const assignmentInfo = await axios.post("http://157.245.240.148:8000/add-assignment", {
      title: title,
      description: description,
      ai_limitation: aiLimits,
      resource_file: resourceFile
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${localStorage.getItem("authToken")}`
      }
    }).then((res) => {
      return res
    })
    // window.location.href = "/write";
  }

  return (
    <div className="bg-bgmain flex flex-col min-h-screen w-screen">
      <div className="flex flex-col justify-center gap-0 fixed top-0 start-0 z-10">
        <Navbar />
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