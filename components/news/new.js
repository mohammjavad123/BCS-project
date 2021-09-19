import Link from "next/link";
import { Comment, Tooltip, List } from "antd";
import React, { useState } from "react";
import classes from "./news.module.scss";
import moment from "moment";

const news = (props) => {
  // console.log(props.info);
  console.log(props.info);
  const actions = "بیشتر...";

  // const data = [
  //   {
  //     author: "sahm1",
  //     avatar:
  //       "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  //     content: (
  //       <p>
  //         We supply a series of design principles, practical patterns and high
  //         quality design resources (Sketch and Axure), to help people create
  //         their product prototypes beautifully and efficiently. We supply a
  //         series of design principles, practical patterns and high quality
  //         design resources (Sketch and Axure), to help people create their
  //         product prototypes beautifully and efficiently.
  //       </p>
  //     ),
  //     datetime: (
  //       <Tooltip
  //         title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
  //       >
  //         <span>{moment().subtract(1, "days").fromNow()}</span>
  //       </Tooltip>
  //     ),
  //   },
  //   {
  //     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
  //     author: "sahme 2",
  //     avatar:
  //       "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  //     content: (
  //       <p>
  //         We supply a series of design principles, practical patterns and high
  //         quality design reWe supply a series of design principles, practical
  //         patterns and high quality design resources (Sketch and Axure), to help
  //         people create their product prototypes beautifully and efficiently.
  //         sources (Sketch and Axure), to help people create their product
  //         prototypes beautifully and efficiently.
  //       </p>
  //     ),
  //     datetime: (
  //       <Tooltip
  //         title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
  //       >
  //         <span>{moment().subtract(2, "days").fromNow()}</span>
  //       </Tooltip>
  //     ),
  //   },
  //   {
  //     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
  //     author: "sahme 2",
  //     avatar:
  //       "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  //     content: (
  //       <p>
  //         We supply a series of design principles, practical patterns and high
  //         quality design reWe supply a series of design principles, practical
  //         patterns and high quality design resources (Sketch and Axure), to help
  //         people create their product prototypes beautifully and efficiently.
  //         sources (Sketch and Axure), to help people create their product
  //         prototypes beautifully and efficiently.
  //       </p>
  //     ),
  //     datetime: (
  //       <Tooltip
  //         title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
  //       >
  //         <span>{moment().subtract(2, "days").fromNow()}</span>
  //       </Tooltip>
  //     ),
  //   },
  //   {
  //     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
  //     author: "sahme 2",
  //     avatar:
  //       "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  //     content:
  //       "dsfdsklfj sdlkfjsldkfjsldkfjlsdkfjasl;kdfjasldkfjsdlkfjسیبسیبمسیdsfdsklfj sdlkfjsldkfjsldkfjlsdkfjasl;kdfjasldkfjsdlkfjسیبسیبمسینبتمسینبتسمینبتdsfdsklfj sdlkfjsldkfjsldkfjlsdkfjasl;kdfjasldkfjsdlkfjسیبسیبمسینبتمسینبتسمینبتنبتمسینبتسمینبت",
  //     datetime: (
  //       <Tooltip
  //         title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
  //       >
  //         <span>{moment().subtract(2, "days").fromNow()}</span>
  //       </Tooltip>
  //     ),
  //   },
  // ];
  // console.log(data);

  return (
    <div className={classes.main}>
      <List
        className="comment-list"
        header="اخرین اخبار"
        itemLayout="horizontal"
        dataSource={props.info}
        renderItem={(item) => (
          <li className={classes.comment}>
            <Comment
              author={item.title}
              avatar={item.images}
              content={item.description}
              actions={<span>...بیشتر</span>}
            />
          </li>
        )}
      />
    </div>
  );
};
export default news;
