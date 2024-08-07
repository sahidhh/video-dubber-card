"use client";

import Image from "next/image";
import { Breadcrumb, Dropdown, Flex, Select } from "antd";
import type { MenuProps } from "antd";
import { useState } from "react";

export default function Home() {
  const [votes, setVotes] = useState(166);
  const [voted, setVoted] = useState(false);
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button
          style={{
            background: "none",
            padding: "10px 80px",
            border: "1px solid #ccc8c7",
            borderRadius: "5px",
            display: "flex",
          }}
        >
          <Image src="/flag.svg" width={15} height={15} alt="" />
          <p style={{ margin: "0 5px" }}>Flag</p>
        </button>
      ),
    },
  ];

  const handleUpvote = () => {
    if (voted) {
      setVotes(votes - 1);
      setVoted(false);
    } else {
      setVotes(votes + 1);
      setVoted(true);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", width: "60%", margin: "10% 20%" }}>
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Home",
            href: "",
          },
          {
            title: "Product",
            href: "",
          },
          {
            title: "VideoDubber - Fast Video Translator",
          },
        ]}
      />
      <div style={{ display: "flex", alignItems: "flex-end", gap: "50px" }}>
        <div className="left">
          <Image src="/product-logo.png" width={150} height={100} alt="" />
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <h2>VideoDubber - Fast Video Translator</h2>
            <Dropdown menu={{ items }}>
              <a href="">
                <Image src={"/dropdown.svg"} width={25} height={25} alt="" />
              </a>
            </Dropdown>
          </div>
          <h3 style={{ fontWeight: "lighter" }}>
            Translate videos in your own voice, globalize in a click!
          </h3>
        </div>
        <div className="right" style={{ display: "flex", gap: "10px" }}>
          <Select
            defaultValue="Visit"
            style={{ width: 100, height: 62 }}
            options={[
              {
                value: "1",
                label: (
                  <p style={{ fontWeight: "bold" }}>
                    Website <a href="videodubber.ai">videodubber.ai</a>
                  </p>
                ),
              },
              {
                value: "2",
                label: (
                  <p style={{ fontWeight: "bold" }}>
                    Learn more <a href="videodubber.ai">videodubber.ai</a>
                  </p>
                ),
              },
              {
                value: "3",
                label: (
                  <p style={{ fontWeight: "bold" }}>
                    Learn more <a href="videodubber.ai">videodubber.ai</a>
                  </p>
                ),
              },
              {
                value: "4",
                label: (
                  <p style={{ fontWeight: "bold" }}>
                    Learn more <a href="videodubber.ai">videodubber.ai</a>
                  </p>
                ),
              },
            ]}
          />
          <button
            onClick={handleUpvote}
            style={{
              padding: "20px",
              width: 200,
              height: 62,
              backgroundColor: voted ? "white" : "#ff4a7a",
              color: voted ? "black" : "white",
              border: voted ? "1px solid #ccc8c7" : "none",
              borderRadius: "5px",
              fontWeight: "bold",
              display: "Flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
            }}
          >
            <Image
              src={voted ? "/arrow-up-pink.svg" : "/arrow-up-white.svg"}
              width={20}
              height={20}
              alt=""
            />
            Upvote {votes}
          </button>
        </div>
      </div>
    </div>
  );
}
