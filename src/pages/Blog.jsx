import React from "react";
import Divider from "../components/Divider";
import blog from "../assets/programs.png";
const Blog = () => {
  const blogData = [
    {
      id: 1,
      title: " Our Free Resources for Waste success at School",
      author: "Krishnan Ravi",
      date: `February 14 <sup>th</sup> ${new Date().getFullYear()}`,
      place: "Trincomalee , LK",
      content:
        "Welcome to our comprehensive guide on achieving waste success at School! Proper waster management is not only a responsibility but also an opportunity for positive change.",
    },
    {
      id: 2,
      title: "Back to School!",
      author: "Krishnan Ravi",
      date: `January 1 <sup>st</sup> ${new Date().getFullYear()}`,
      place: "Chennai , TN",
      content:
        "Welcome back to school! As we embark on a new academic year, there is an exciting opportunity to cultivate a sense of community while making a positive impact on the environment.",
    },
  ];

  const recentTopics = [
    { id: 1, topic: "Keep city clean" },
    { id: 2, topic: "Back to school" },
    { id: 3, topic: "Eco system" },
    { id: 4, topic: "Global Warming" },
  ];
  return (
    <div id="blog" className="max-w-screen-2xl h-auto overflow-x-hidden">
      <Divider />
      <div className="container block">
        <div className="flex items-center justify-center mt-4 py-3">
          <h2 className="text-4xl text-secondary-brand font-semibold">
            Our Blog
          </h2>
        </div>
      </div>
      <div className="container py-4 my-4 md:mx-20 flex md:flex-row flex-col gap-4 h-auto">
        <div className="md:w-3/5 h-full flex flex-col gap-5">
          {blogData.map((data) => {
            return (
              <div
                key={data.id}
                className="container cursor-pointer w-fit py-5 text-neutral-grey px-5 shadow bg-neutral-one"
              >
                <h4 className="text-2xl font-bold my-3 text-neutral-600">
                  {data.title}
                </h4>
                <p className="font-semibold">
                  By{" "}
                  <span className="text-secondary-brand"> {data.author} </span>{" "}
                  | <span dangerouslySetInnerHTML={{ __html: data.date }} /> |{" "}
                  {data.place}
                </p>
                <p className="text-sm mt-3">
                  {data.content}
                </p>
              </div>
            );
          })}
        </div>
        <div className="h-full md:flex flex-col hidden shadow-sm text-neutral-grey border-netural-two ">
          <div className=" flex">
            <div>
              <h4>Related Topics</h4>
              {recentTopics.map((r) => {
                return (
                  <ul key={r.id} className="px-4 list-none text-ternary-brand">
                    <li className="p-1">{r.topic}</li>
                  </ul>
                );
              })}
            </div>
            <img src={blog} className="w-auto ml-28 h-52" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
