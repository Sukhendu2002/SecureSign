import * as React from "react";
import "./logo.css";
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    viewBox="0 0 300 256"
    {...props}
    className="svg"
    fill="#ffff"
  >
    <path d="M148.5 24.9c-.6.6-3.9 1.9-7.4 3-5 1.6-6.8 1.8-7.9.8-1.1-.9-1.7-.7-2.7.6-1.5 2-35.7 11.7-40.2 11.4-2.3-.2-2.9.3-3.1 2.3-.2 1.3-2.1 4.5-4.1 7C81 52.5 73.3 62.5 66 72.2 58.7 82 52.1 90 51.3 90c-1.9 0-2.8 2.7-1.4 4.4 1.3 1.5-.5 35.9-2 38.8-.6 1.1-.6 2.5 0 3.5 1.8 3.3 3.1 16.6 1.8 18.1-.9 1.1-.7 1.8 1 3.2 2.7 2.2 17.2 29.1 17 31.6-.1 1.1.6 2 1.8 2.2 2.3.5 18 14.1 18 15.6.1 2.1 1.7 3.7 3.1 3.2 1.4-.5 21.4 12.9 21.4 14.4 0 .4 1.7.7 3.8.8 7.9 0 31.6 4.3 33.5 6 1.8 1.6 2 1.6 3.3-.3 1.8-2.4 12.8-5.7 14.3-4.2.8.8 1.7.4 3.1-1.1 1.2-1.2 2.7-2.2 3.4-2.2 1.4 0 25.4-7.1 31.8-9.4 2.2-.8 4-1 4.5-.5 1.5 1.5 4.5-.2 4-2.2-.3-1 .1-2.3.9-3 .7-.6 1.2-1.8 1.1-2.7-.3-2.6 14.5-35.2 16-35.2.8 0 1.6-.7 1.9-1.5.3-.8 3.1-2.2 6.2-3.1 3.2-.9 5.1-1.9 4.4-2.1-.7-.3-3.3.2-5.9 1.1-2.6.9-4.8 1.6-5 1.6-.9 0 .4-3.6 8.2-22.2 4.6-11.2 8.5-19.2 8.5-17.8.1 7.1-2.4 33.5-3.1 33.8-.5.2-.9 1.3-.9 2.4 0 1.1-6.8 11-15.1 22s-14.9 20.2-14.6 20.5c.3.2 5.4-6 11.4-13.9 5.9-7.9 12.7-16.9 15.1-20 2.4-3.1 5.2-6 6.2-6.3 1.9-.6 2.8-4 1.2-4.7-1.4-.6 1.1-38.3 2.7-40.2 1.2-1.4 1.2-1.9-.2-3.4-1.8-2-3.8-14.7-2.4-16.1.5-.5.1-1.6-1.1-2.7-2.6-2.6-16.1-28.7-15.9-31 .1-1.1-.9-2.4-2.7-3.2-1.5-.8-6.6-5.1-11.2-9.6C211.5 47 207.9 44 206.5 44c-.4 0-.3.5.1 1.2s.3.8-.5.4c-.6-.4-.9-1.1-.6-1.5.2-.5-3.3-3.4-7.9-6.6-4.7-3.2-8.7-6.6-9-7.8-.3-1.4-.9-1.8-2.3-1.2-1 .4-2.5.8-3.3.8-4 .1-30.6-3.6-31.4-4.4-1.3-1.1-2-1.1-3.1 0zm19.5 4c4.2.7 1.6.9-11.5.9-15.2 0-16.5-.1-12.5-1.2 4.7-1.3 14.4-1.2 24 .3zm-13.4 7.3c1.4 2.8 2.3 5.2 2.1 5.4-.4.4-20.4-8.9-21.4-10-.2-.2 3.5-.3 8.2-.3h8.6l2.5 4.9zm10.9-4.2c1.7.7 2.4.7 2 0-.4-.6 2.5-1 7.8-1 8.9 0 9.7.4 9.7 5 0 1.6-.5 1.6-6.6-.7-3.7-1.3-7.2-2.2-7.8-2-.6.2 2.2 1.5 6.2 2.8l7.4 2.4-.7 6.4c-.8 7.9-1.3 9.1-3.2 9.1-1.8 0-20.6-10-21.1-11.2-.2-.4-.9-.5-1.4-.2-.7.4-.8.2-.4-.4.4-.6-.5-3.4-1.9-6.2l-2.5-5h4.9c2.7 0 6.1.4 7.6 1zm-38.6 1.4c-.2.2-5.8 3.6-12.3 7.5-8.7 5.1-12.3 6.8-13.2 6-1.6-1.3-7.6-3-6.9-1.9.3.5 1.9 1.1 3.5 1.5 4.4 1 4.5 2.2.3 4.4-5.2 2.7-13 8.1-11.8 8.1.6 0 4.8-2.3 9.4-5.1 7.9-4.7 8.6-4.9 11.5-3.8 4.1 1.7 4.4 2.3 5.2 10.1.4 3.7 1 6.6 1.3 6.3.4-.2.4-3.2 0-6.7-.5-4.3-.4-6.7.5-8 1.6-2.3 14.6-11.1 14.6-9.9 0 .6-.5 3.2-1.1 6l-1 4.9-5.7-.3-5.7-.4 5.3 1c3.1.6 5.2 1.6 5.2 2.4 0 .7-.7 4.4-1.6 8.3-1.6 7.3-3.1 9-6.4 7.2-1-.5-5.6-2.2-10.2-3.6-4.5-1.4-8.7-2.8-9.1-3.1-.4-.2 2.2-2.7 5.8-5.5 3.6-2.8 6.3-5.3 6.1-5.6-.3-.3-3.6 2-7.3 5l-6.7 5.6-4.5-1.6c-7-2.2-7.2-2.7-5.3-9.7.9-3.3 2.6-6.9 3.7-8 1.2-1.2 8.3-3.8 18.5-6.6 16.8-4.8 18.7-5.2 17.9-4.5zm3.7 2.8c-.3 1.8-1.3 3.6-2.1 4.1-.8.4-4.5 2.8-8.2 5.3-5.7 3.8-7.3 4.5-10.2 4-3.6-.5-5.3-1.6-3.6-2.3.6-.2 6-3.4 12-7.2 6.1-3.8 11.4-7 11.9-7 .5-.1.6 1.3.2 3.1zm5.7-1.4c-.2.6.3.9 1.1.6.8-.3 5.9 1.8 11.5 4.5 9.8 5 10.1 5.2 13.1 11.1 1.7 3.3 3.3 6 3.5 6 .3 0-.6-2.2-2-5-1.4-2.7-2.5-5.1-2.5-5.3 0-.2 3.7 1.5 8.3 3.8 4.5 2.3 8.9 4.4 9.7 4.7 2.3.8.7 1.7-3.3 2-2 .2-3.7.6-3.7.9 0 1.2-3.9 1.7-4.4.5-.3-.7-.9-.6-1.8.5-1.5 1.8-39.9 13.1-41 12.1-.5-.6 6-31.7 7.8-37 .5-1.6 4-1.1 3.7.6zm58.5 3.2c3.4 2.7 6.7 4.9 7.4 4.7.7-.1 1.2.2 1.3.8.1 2.2 1.8 3.6 3.6 3 1.1-.4 1.9-.2 1.9.5 0 .6-.6.8-1.2.5-2.3-1.2 6.6 6.6 14 12.2 4 3.1 7.1 5.8 6.8 6.1-.3.2-.1 1.2.4 2.1.6 1.1-.4 6.2-3 15.6-2.1 7.7-4.1 15.7-4.5 17.7-1.3 6.7-3 7-22.3 4.2l-3.3-.5 2.8-2.2c5.1-3.9 9.4-7.7 8.6-7.7-.5 0-3.6 2.3-7 5l-6.2 5-10.3-1.1c-5.7-.6-10.9-1.7-11.7-2.5-1.2-1.1-.8-3.5 2.9-16.6 2.4-8.4 4.5-15.7 4.8-16.1.2-.4 1.4-.2 2.5.6 6 3.8 12 7 11.3 5.9-.4-.6-3.5-2.7-7-4.7l-6.4-3.5 1-4.1c.6-2.2 1.4-3.8 1.8-3.7.5.2 8.1 10.4 17 22.8s16.7 22.9 17.3 23.5c2.9 2.8-1-3.5-8.3-13.4-4.4-6.1-8-11.3-8-11.7 0-.3-.9-1.6-2-2.8-3.7-4-14.1-18.8-13.6-19.3.2-.3 4 .3 8.3 1.2 22.1 4.6 31.6 6.5 33.1 6.4 2.7-.1-6.7-2.5-24.1-6-11.9-2.3-16.6-3.7-17.7-5.1-1.4-1.7-1.4-2.9.1-11.6 1-5.3 1.8-9.8 1.8-10 .3-.9 2.5.4 7.9 4.8zM85.6 52.2c-.6 2.5-1.9 5.5-2.9 6.6-.9 1-1.5 2.1-1.2 2.3.2.3-4.8 5.7-11.2 11.9-7.8 7.7-10.5 10-8.2 6.8 7.6-10.4 24.4-32.6 24.6-32.4.1 0-.4 2.2-1.1 4.8zm95.4 6.7c0 .4-.5 2.2-1.1 4l-1.1 3.1-3.5-2.1c-1.9-1.2-3.7-1.9-4-1.6-.3.4 1.1 1.4 3.2 2.4 3.4 1.6 3.6 2 3.1 5.3-.3 1.9-1.6 6.9-2.9 11l-2.3 7.5-1.8-11c-1-6-2.2-11.8-2.7-13-1.2-2.7-.3 4.2 2.1 16.4 1.6 7.7 1.7 10.3.8 14.2-1.4 5.9-2.9 6.4-8.3 2.8-10.1-6.9-33.9-22.1-35.1-22.6-3.1-1.2-1.1.9 3.7 3.9l5.2 3.1-2.9 2.1c-3.8 2.8-9.3 8-7.4 7 .8-.4 3.6-2.5 6.2-4.6l4.7-3.9 13.2 8.7c7.3 4.7 13.9 8.8 14.6 9.1 2.6 1 1.2 4-3.3 7.2l-4.7 3.3-14.9-5.3c-8.2-2.8-15.1-5-15.4-4.7-.5.6 6.7 3.3 19.5 7.4 5 1.6 9.1 3.1 9.1 3.4 0 .3-1.9 1.8-4.3 3.4-2.3 1.6-8.9 6.3-14.6 10.4-7.5 5.5-11.2 7.6-13.6 7.6-3.6.1-47.5-21.1-47.5-22.9 0-.6 3-3.3 6.8-6 3.7-2.7 13.9-10.3 22.6-16.7 11.1-8.3 16.4-11.7 17.7-11.3 1.2.4 2.3-.2 3.5-2 .9-1.4 2.4-2.5 3.3-2.5.9 0 8.3-2 16.6-4.4 8.2-2.5 15.1-4.3 15.2-4.2.1.1-4.3 3.4-9.7 7.4-8.9 6.6-15.2 12.1-11 9.7.8-.5 6.4-4.7 12.4-9.4 9-7.1 12.2-9 18-10.7 7.9-2.4 10.6-2.8 10.6-1.5zm-88.2 4.8c1.2.3 2.2.8 2.1 1.2 0 .3-2.9 2.8-6.4 5.5-3.6 2.8-6.2 5.2-6 5.4.2.3 3.5-2 7.3-5.1l6.9-5.6 11.3 3.8c6.3 2 11.5 4.2 11.7 4.7.2.6-2.7 3.2-6.4 5.9-21.5 15.6-34.1 25.1-36.4 27.2-1.7 1.6-2.9 2.1-3.3 1.4-.4-.6-.5-1.5-.2-2 .4-.5 2.8-10.3 5.6-21.7 2.7-11.4 5.5-21.1 6.2-21.6.7-.4 2.2-.6 3.3-.2 1.1.3 3 .8 4.3 1.1zm-10.2.8C82.1 66 79.1 77 78.5 80c-2.7 12.8-6.9 28-7.8 28-.6 0-2.6-1.4-4.3-3.1l-3.3-3.2 1.8-3.6c2.4-4.6 3.7-9 2.3-7.6-.5.5-1.7 3.1-2.7 5.7-1 2.7-2 4.8-2.4 4.8-1.5-.1-8.1-7.2-8.1-8.8 0-1.5 26.4-28.6 28.4-29 .4-.1.5.5.2 1.3zM235.9 82c.1.9.5 2 .9 2.5 1.6 1.8 12.5 32.5 11.9 33.2-.4.3-1.9 0-3.4-.7-1.6-.7-7.1-2.7-12.3-4.6-10.4-3.6-12.4-5.3-10.9-9.1.5-1.3 2.3-7.9 4-14.6 1.6-6.7 3.5-14 4.1-16.2l1.1-4 2.3 6c1.3 3.3 2.3 6.7 2.3 7.5zm11.7 19.9c.8 2.5 1.4 5.7 1.3 7.1 0 2.8-1.4-.3-7.4-16.5-5-13.6-5-13.7.1-4.1 2.5 4.9 5.2 11 6 13.5zM61 102c4.9 4.4 8 8 8.3 9.7.3 1.8-.9 5.6-4 12.2-8.9 19.1-15.4 35.5-10.6 26.6 1.7-3.1 13.8-30 15.4-34.4.5-1.3 1.2-2.1 1.5-1.8.6.6 6.4 26.6 6.8 30.7.2 1.4.6 3.2.9 4 .3.8 1.3 4.6 2.2 8.4 1.7 7.4 1.1 9.5-2.1 7.8-2.3-1.2-22.9-8.2-24.1-8.2-2.1.1 3.1 2.3 13.2 5.6 6.7 2.2 11.9 4.6 13.3 6 1.9 2 2.7 5 4.7 19.1 1.4 9.1 2.3 16.8 2.1 17-.2.2-1.1-.9-2.1-2.4-4.6-7-26.8-36.3-27.2-35.9-.4.3 11 16.2 24.1 33.6.6.8-.5.2-2.4-1.4-10.3-8.5-10.3-8.4-20-26-2.4-4.4-3.8-7.6-3.2-7.2 1.9 1.1 1.4-.3-1.3-3.8-1.4-1.8-2.5-4.2-2.5-5.4 0-1.1-.4-2.4-1-2.7-1.1-.7-1.5-58.5-.4-58.5.4 0 4.1 3.2 8.4 7zm121 3c4.7.6 10.1 1.2 12 1.5 1.9.2 6.7.7 10.5 1 9.8.9 12.5 1.5 12.5 2.8 0 1.3-31.5 44-32.8 44.5-.4.1-2-5.1-3.6-11.5-1.5-6.5-3.2-12.7-3.7-13.8-1.7-4.2-6-22.8-5.5-24.1.6-1.7.1-1.6 10.6-.4zm-10.7 8.7c1 4.1 1.5 7.9 1 8.2-.4.4-6.5 5-13.5 10.1-7 5.2-12.5 9.6-12.3 9.8.2.3 6.3-3.9 13.5-9.3s13.3-9.6 13.5-9.3c.2.2 1.3 4 2.4 8.4 1.1 4.3 2.9 11.4 4.1 15.8 1.2 4.3 1.9 8 1.7 8.3-.3.2-12.5-3.9-27.1-9.1-14.6-5.3-27-9.6-27.6-9.6-3.2 0 .5-3.6 12.3-11.8 7.2-5.1 16.4-11.6 20.2-14.5 3.9-2.9 7.7-5.2 8.5-5 .9.3 2.2 3.2 3.3 8zm65.9 1.7c11.3 4 13.8 5.6 12 8-.5.6-4.6 10.2-9.2 21.3-4.7 11.2-8.7 19.7-9 19-1.1-2-3.2-16.8-2.6-17.5.4-.3 2.3 1 4.3 2.9l3.7 3.4-3.9-4.5c-2.1-2.5-4.2-4.7-4.6-5-.4-.3-1.9-7-3.4-14.9-1.4-8-2.8-14.8-3.1-15.3-.9-1.4.8-3 2.5-2.2.9.3 6.9 2.5 13.3 4.8zm-17.2-3.2c.1.2 2.3 12.2 4.9 26.8 2.7 14.6 4.6 26.9 4.2 27.3-.9.9-41.1-8-42.6-9.4-1.1-1.1-2.8 1.2 16.5-24.3 13.1-17.5 16.8-21.9 17-20.4zM97.2 124.1c12.8 6.3 22.3 11.7 22.3 12.4 0 1.8-32.6 28.4-34.1 27.8-1.1-.4-1.9-3.6-8-31.8-2-9.3-3.9-17.5-4.1-18.2-.3-.7 0-1.3.6-1.3s11.1 5 23.3 11.1zm-46.5 6.1c-.2 2.4-.4.7-.4-3.7s.2-6.3.4-4.3c.2 2.1.2 5.7 0 8zm101 16.8c13.9 4.9 25.6 9 26.1 9s1.5.6 2.1 1.3c.8 1.1-3.6 5-21.5 18.6-13 10-23 16.9-23.5 16.4s-2.7-10.7-4.9-22.7-4.5-23.7-5-25.9c-.9-4-.6-5.7.8-5.7.4 0 12.1 4 25.9 9zm-28.3-5.3c.3 1.6 1.5 8 2.6 14.3 1.1 6.3 3.1 17.1 4.5 23.9 1.3 6.9 2.2 12.7 2 13-.3.2-2.4-.7-4.8-2s-12.5-6.9-22.5-12.4c-10.9-6-18.1-10.6-18.2-11.5 0-.8.9-2.1 1.9-2.7 2-1.2 12.5-9.6 24.9-19.8 3.6-3 7.1-5.5 7.8-5.5.7 0 1.5 1.2 1.8 2.7zm85.4 22.3c14.5 3.3 19.2 4.7 19.5 6 .2.9-2.9 9-7 18.1-4.1 9-7.9 17.6-8.5 19.1-.5 1.5-1.7 2.8-2.6 3-2.5.5-20.2-5.5-20.2-6.9 0-.6.4-1.3 1-1.5 1.7-.6 37-30.2 36.5-30.7-.3-.2-1.3.3-2.2 1.1-10.1 8.7-36.5 29.9-36.8 29.6-.2-.2-1.3-9.4-2.3-20.3-1.9-20.6-1.7-23.1 1.8-22.2 1 .2 10.3 2.4 20.8 4.7zm-25.5 2.1c2 14.3 3.2 35 2.1 36-.8.6-8.5-.3-22.5-2.6-11.7-2-22.2-3.5-23.3-3.3-1.2.2 5.7 1.7 15.2 3.3 18.7 3.2 17.9 2.7 16.3 9.7-.5 2.1-.5 3.6-.1 3.3.5-.3 1.2-2.6 1.6-5.1l.7-4.6 5.1.7c2.8.4 5.5.9 5.9 1.2.4.2-4.6 4.2-11.1 8.8l-11.9 8.4-7.9-4.1c-4.3-2.2-7.4-3.6-6.9-3 .6.6 3.9 2.5 7.4 4.3l6.5 3.1-3.5 2.9c-1.9 1.6-4.1 2.8-4.9 2.8-2.2 0-15.9-28.8-15.3-32 .4-1.7 5.2-5.9 15.7-13.7 8.4-6.3 18.1-13.8 21.6-16.7 3.6-2.9 7-5.2 7.5-5.1.6.1 1.3 2.7 1.8 5.7zM100 177.2c2.5 1.5 4.4 3.1 4.2 3.5-.3 1 7.3 12.5 9.8 14.8 3.3 2.9 2.3 1.3-3.9-7.1-3.3-4.3-5.8-8-5.6-8.2.5-.6 26.5 13.9 26.5 14.8 0 1-11.9 4.1-13.1 3.4-.6-.3-1.6 0-2.2.8-1.5 1.8-21.9 8-23.9 7.3-1-.4-1.9-4.4-3.2-14.3-1-7.5-2.2-15.5-2.6-17.6-.5-2.2-.7-4.4-.4-4.8.5-.8 4.4 1.2 14.4 7.4zm33.4 20.8c1.4.5 2.6 1.4 2.6 2 0 .6 2.9 7 6.5 14.2 3.6 7.1 6.5 13.4 6.3 13.8-.2.5-3.7-.4-7.8-2s-15.8-5.9-26-9.5c-10.2-3.6-19.3-6.9-20.3-7.3-1.2-.5 4.1-2.5 16.5-6.3 21.7-6.7 19.1-6.1 22.2-4.9zm66.8 11.1c4.3 1.3 7.8 2.6 7.8 2.9 0 .3-6.9 2.5-15.3 4.9-8.3 2.5-19.9 5.9-25.6 7.8-12.4 3.9-13.5 4-9 1 1.9-1.3 8.7-6 15-10.4 14.7-10.3 14.1-10.2 27.1-6.2zm-71.7 13.6c7.1 2.4 13.2 4.6 13.5 5 1.1 1.2-25.1-3.5-26.4-4.8-.6-.5-1.6-.9-2.4-.9-1.1 0-15.1-8.7-17.1-10.6-.3-.3 4 1.2 9.5 3.2 5.4 2 15.7 5.6 22.9 8.1z" />
    <path d="M130.4 54.2c-.3.4.1.8.8.8.7 0 7.2.9 14.3 2 11.6 1.7 20.6 2.5 16.5 1.3-5.4-1.4-31.2-4.8-31.6-4.1zM189.5 40.5c5.1 2.2 8.2 2.6 4 .5-2.2-1.1-4.7-1.9-5.5-1.9-.8 0-.1.6 1.5 1.4zM198 50c-1.4.5-4.5 1.4-6.9 2-2.3.6-4.1 1.3-3.8 1.6.5.5 16.8-3.4 17.6-4.2.8-.7-4.3-.3-6.9.6zM212.9 65.4c-.3.3 0 5.2.7 10.8 1.2 10.6 1.1 12.5-1.5 14.5-1 .8-1.1 1.2-.4 1.3.6 0 1.5-.5 1.8-1 1.3-2 2.3-.9 3 3.2.4 2.4 1.2 5 1.7 5.8.7 1.1.8.8.4-1-2-10.3-2-10.3.2-9.1 1.1.6 2.7 1.1 3.4 1.1.7-.1-.2-.7-2-1.5-3.9-1.7-3.9-1.5-5.4-14.3-.7-5.7-1.6-10.1-1.9-9.8z" />
    <path d="M202 80.4c0 .6 9.9 6.6 10.8 6.6.4 0-.2-.8-1.3-1.6-2.4-1.9-9.5-5.6-9.5-5zM122 105c0 17.3.4 27 1 27s1-9.7 1-27-.4-27-1-27-1 9.7-1 27zM115.6 88.7c.2 4.6.1 8.3-.3 8.3-.5 0-3.3-.7-6.3-1.5s-6.6-1.4-8-1.4c-1.4.1 1.2 1 5.8 2.1 4.5 1.1 8.2 2.3 8.2 2.7 0 .4-2.1 3.4-4.8 6.7-6.9 8.7-12.9 17.1-11 15.6.9-.7 4.9-5.6 8.9-11 4-5.3 8.6-10.9 10.2-12.5 1.5-1.5 2.4-2.7 2-2.7-.5 0-1.4.5-2.1 1.2-.9.9-1.2.2-1.3-3.3 0-2.4-.4-6.2-.9-8.4-.7-3.1-.8-2.1-.4 4.2zM117.6 103c1 5.4 2.6 8.3 1.8 3.5-.3-2.2-1-4.7-1.5-5.5-.7-1-.8-.4-.3 2zM82.5 90.4c2.2.7 5.6 1.6 7.5 1.9l3.5.6-3-1.4c-1.6-.7-5-1.5-7.5-1.9l-4.5-.5 4 1.3zM74.5 73.8c-3.3 6.8-4.6 10.4-3.6 9.8.5-.3 1.1-.1 1.3.5.2.5 1.5-.2 2.8-1.8 2.2-2.4 2.2-2.5.2-.9-3.4 3-3.7 1.2-.8-5 1.5-3.1 2.5-5.8 2.3-6-.2-.2-1.2 1.3-2.2 3.4zM67.4 86c-.5.5-2.7 1.6-4.9 2.5-3.1 1.2-3.4 1.4-1 1 1.7-.4 5.2-.8 7.9-1 5-.5 7.6-1.5 3.8-1.5-1.2 0-2.2-.5-2.2-1 0-1.3-2.3-1.3-3.6 0zM69.7 94c.3 2.5 1 5.4 1.5 6.5.5 1.3.6.2.2-3-.3-2.8-1-5.7-1.4-6.5-.5-.9-.6.4-.3 3zM226.1 92.5c.3.2 3.6 1.6 7.5 3 3.8 1.5 6.5 2.2 5.9 1.6-1.1-1.1-11-5.1-12.7-5.1-.6 0-.9.2-.7.5zM57.6 112.6c-2 4.8-3.5 9.2-3.3 9.8.2.5 2-3.2 4.1-8.3 2-5.1 3.5-9.5 3.3-9.8-.3-.2-2.1 3.5-4.1 8.3zM66.5 142.4c7.6 3.5 10.8 4 4 .6-3.3-1.6-6.7-2.9-7.5-2.9-.8 0 .8 1.1 3.5 2.3zM73 170.9c-.6 2.8-1 5.6-.8 6.2.2.7 1-1.4 1.7-4.5.7-3.2 1.1-6 .8-6.2-.3-.3-1 1.8-1.7 4.5zM175.2 108.5c0 1.6.4 4.1.8 5.5.8 2.4.8 2.4.8-.5 0-1.7-.4-4.1-.8-5.5-.8-2.4-.8-2.4-.8.5zM185.8 111.4c-3.1 2.5-5.9 5-6.3 5.6-.3.5-1 .8-1.5.5-1.1-.7-2.3 1.2-1.5 2.5.3.5 2.2-.6 4.3-2.5 2-1.8 5.5-5 7.7-6.9 5.6-4.9 4.1-4.5-2.7.8zM180 120.5c0 .7 20.1 10.7 20.7 10.2.4-.4-18.9-10.7-20.1-10.7-.3 0-.6.2-.6.5zM159 112.6c0 .7 5.8 3 9.5 3.8 2.6.5 2.7.5 1.1-.5-2.4-1.5-10.6-4-10.6-3.3zM177.3 147.5c0 3.3.2 4.5.4 2.7.2-1.8.2-4.5 0-6s-.4 0-.4 3.3zM236.5 124.4c-1.4 3.1-3.6 8.1-5 11.1s-2.2 5.5-1.9 5.5c.9 0 10.7-21.1 10.1-21.7-.4-.3-1.8 2-3.2 5.1zM204 132.5c0 .3 4.5 2.7 10 5.5 11.2 5.6 13.3 6 3.7.6-6.8-3.9-13.7-6.9-13.7-6.1zM214.8 153.5c-8.4 6.2-11.9 9.8-6 6 6.7-4.4 16.6-12.6 15-12.5-.2 0-4.2 3-9 6.5zM224.2 157.9c-1.4 4.6-1.6 7.4-.3 5.1.9-1.7 2.4-9 1.8-9-.2 0-.9 1.7-1.5 3.9zM88.5 134c-3.7 5-6.6 9.3-6.3 9.5.2.2 3.5-3.6 7.2-8.6s6.6-9.2 6.3-9.5c-.2-.3-3.5 3.6-7.2 8.6zM85.3 148c1.5.4 6.2 1.1 10.5 1.4 4.6.3 6.7.2 5.2-.3-1.4-.4-6.1-1.1-10.5-1.4-5.1-.4-7-.3-5.2.3zM128.5 143.5c.3 1.6.8 5.2 1.1 7.8.5 3.1 1 4.5 1.7 3.8.6-.6 2.4.1 5.1 1.9 10.6 7.2 23.7 15.2 24.2 14.8.4-.5-3.2-2.9-19.8-13.3-4.3-2.7-7.8-5.1-7.8-5.5 0-.4 2-2.1 4.5-3.9 2.5-1.8 4.5-3.5 4.5-3.8 0-.7-4.9 2.5-7.7 5-1.3 1.1-2.4 1.9-2.6 1.6-.2-.2-1.1-2.9-2-5.9-1-3-1.5-4.2-1.2-2.5zM110.5 150.9c2.8 1.1 14.4 2.3 12.5 1.2-.8-.5-4.4-1.1-8-1.4-3.8-.4-5.7-.3-4.5.2zM124.1 175.2c-1.2 4-2.4 8.1-2.7 9-.3 1-.3 1.8 0 1.8.8 0 5.9-17.1 5.3-17.6-.3-.3-1.5 2.8-2.6 6.8zM193.8 169.2c-3.7 2.8-6.6 5.4-6.3 5.6.3.3 3.3-1.7 6.7-4.3 8-6.2 8.4-6.5 7.3-6.4-.6 0-4 2.3-7.7 5.1zM218 185c-.6 2.3-.9 4.7-.7 5.3.2.6.9-1 1.6-3.7.6-2.7 1-5.1.7-5.3-.3-.3-1 1.4-1.6 3.7zM193 188.1c3 1.1 5.9 1.8 6.4 1.6 1.3-.4-8.2-3.7-10.3-3.6-.9 0 .9.9 3.9 2zM209.8 193.6c2.3.9 4.2 2 4.2 2.5s.7.9 1.5.9c2.6 0 1.6-2.8-1.2-3.3-8.2-1.7-8.7-1.7-4.5-.1zM205.4 201.5c-8.2 5.3-7.7 6 .7.9 5.1-3 7.9-5.4 6.6-5.4-.2 0-3.5 2-7.3 4.5zM176.9 173.5c-.2 4.9-.1 9.4.2 9.8 1.3 1.6 1.5-.8.9-9.8l-.6-9-.5 9zM166 175.4c0 .7 8.2 5.7 8.6 5.3.2-.2-1.4-1.6-3.6-3.1-3.8-2.5-5-3-5-2.2zM158 187.2c-7.4 2.2-13.9 4.4-14.4 4.8-1 1 12.5-2.6 24.4-6.4 12.5-4 4.5-2.7-10 1.6zM175 190.7c-.6 3.2-1.4 6.7-1.7 7.8-.3 1.3-.2 1.7.4 1 1.2-1.2 3.8-13.3 3-14.1-.3-.3-1 2.1-1.7 5.3zM90.7 194c1 1 21.4 5.2 22.1 4.6.5-.6-.9-.9-13.6-3.5-5.2-1-9-1.5-8.5-1.1zM123 203c3.9 2.6 15.2 8.1 15.7 7.6s-15-8.6-16.4-8.6c-.5 0-.1.5.7 1zM115.5 208.3c-.4 3.2-.5 6-.2 6.3.8.8 2-7.9 1.5-10.2-.3-1.1-.8.7-1.3 3.9zM187 213.1c-3.6 2.3-6.9 4.6-7.5 5.2-1.2 1.2 7.4-3.5 12.5-7 5.9-4 1.9-2.5-5 1.8zM230 181.7l-5.5 5.8 5.8-5.5c3.1-3 5.7-5.6 5.7-5.7 0-.8-1 .1-6 5.4z" />
  </svg>
);
export default Logo;
