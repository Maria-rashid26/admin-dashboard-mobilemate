import * as React from "react";
import { Accordion } from "react-bootstrap";

const userFeed = [
  {
    id: 1,
    time: "03:83 AM",
    title: "Page View",
    Viewedurl: "http://www.youtube.com",
    ResourceCenterId: "13673428",
    ExternalUrl: "http://urls/hsia/237",
    ResourceCenterName: "Main center",
    PageUrl: "http://www.e823has/adadj6/ujs",
  },
  {
    id: 2,
    time: "03:83 AM",
    title: "Page View",
    Viewedurl: "http://www.youtube.com",
    ResourceCenterId: "13673428",
    ExternalUrl: "http://urls/hsia/237",
    ResourceCenterName: "Main center",
    PageUrl: "http://www.e823has/adadj6/ujs",
  },
  {
    id: 2,
    time: "03:83 AM",
    title: "Page View",
    Viewedurl: "http://www.youtube.com",
    ResourceCenterId: "13673428",
    ExternalUrl: "http://urls/hsia/237",
    ResourceCenterName: "Main center",
    PageUrl: "http://www.e823has/adadj6/ujs",
  },
  {
    id: 2,
    time: "03:83 AM",
    title: "Page View",
    Viewedurl: "http://www.youtube.com",
    ResourceCenterId: "13673428",
    ExternalUrl: "http://urls/hsia/237",
    ResourceCenterName: "Main center",
    PageUrl: "http://www.e823has/adadj6/ujs",
  },
  {
    id: 2,
    time: "03:83 AM",
    title: "Page View",
    Viewedurl: "http://www.youtube.com",
    ResourceCenterId: "13673428",
    ExternalUrl: "http://urls/hsia/237",
    ResourceCenterName: "Main center",
    PageUrl: "http://www.e823has/adadj6/ujs",
  },
  {
    id: 2,
    time: "03:83 AM",
    title: "Page View",
    Viewedurl: "http://www.youtube.com",
    ResourceCenterId: "13673428",
    ExternalUrl: "http://urls/hsia/237",
    ResourceCenterName: "Main center",
    PageUrl: "http://www.e823has/adadj6/ujs",
  },
];
const UserFeedAccordion = () => {
  return (
    <Accordion className="md:h-[20rem] overflow-y-auto h-[12rem]  w-[320px] md:w-full  md:pb-0">
      {userFeed.map((userActivity, index) => (
        <Accordion.Item
          eventKey={index.toString()}
          key={userActivity.id}
          className="border"
        >
          <Accordion.Header className="h-9 flex">
            <div className="flex text-[12px] md:space-x-7 space-x-2 md:px-3 text-gray-800 ">
              <p>{userActivity.time}</p>
              <p className="font-semibold  ">{userActivity.title}</p>
              <p>{userActivity.Viewedurl}</p>
            </div>
          </Accordion.Header>
          <Accordion.Body className="py-2 bg-blue-50/40 text-gray-800 ">
            <div className="flex md:w-full md:px-2">
              <div className="md:px-4 space-y-2 py-3 w-[340px]">
                <div className="flex">
                  <p className="md:w-[200px] w-[150px] font-semibold">
                    ResourceCenterId
                  </p>
                  <p>{userActivity.ResourceCenterId}</p>
                </div>
                <div className="flex">
                  <p className="md:w-[200px] w-[150px] font-semibold">
                    ExternalUrl
                  </p>
                  <p>{userActivity.ExternalUrl}</p>
                </div>
                <div className="flex">
                  <p className="md:w-[200px] w-[150px]  font-semibold">
                    ResourceCenterName
                  </p>
                  <p>{userActivity.ResourceCenterName}</p>
                </div>
                <div className="flex space-x-16">
                  <p className="md:w-[200px] w-[87px]  font-semibold ">
                    PageUrl
                  </p>
                  <p className="w-[120px] line-clamp-1">
                    {userActivity.PageUrl}
                  </p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default UserFeedAccordion;
