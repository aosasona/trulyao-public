import { useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import { API_URL } from "config/api";
import Back from "@/components/Back";
import Meta from "@/defaults/Meta";
import Moment from "react-moment";
import Footer from "@/components/Footer";
const readingTime = require("reading-time");
import parse from "html-react-parser";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import {
  FaFacebookF,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

interface Props {
  article: any;
}

const SinglePost: NextPage<Props> = ({ article }) => {
  return (
    <>
      {article ? (
        <div>
          <Meta title={article.title} desc={article.description} />
          <main className="w-[90%] lg:w-4/6 2xl:w-3/6 mx-auto mt-[6vh] lg:mt-[9vh]">
            <Back />
            <h1 className="text-4xl lg:text-5xl my-5">{article.title}</h1>
            <div className="text-xs flex items-center justify-between my-2">
              <Moment
                format="MMM Do YYYY"
                className="font-normal text-neutral-600"
              >
                {article.createdAt}
              </Moment>
              <p className="bg-neutral-800 text-neutral-500 text-[10px] px-2 py-[2px]">
                {readingTime(article.content).text}
              </p>
            </div>
            <section className="mt-2">
              <div className="text-[14px] leading-relaxed bg-neutral-800 bg-opacity-60 py-6 px-4 lg:py-8 lg:px-6 text-left lg:text-sm mt-5 backdrop-blur-md cursor-text">
                {parse(article.content)}
              </div>
            </section>
            <div className="bg-neutral-700 backdrop-blur-md bg-opacity-30 py-2">
              <h3 className="text-center py-1 text-xs font-light">
                Share To...
              </h3>
              <div className="flex justify-evenly pt-5 pb-6">
                <FacebookShareButton
                  url={`https://www.trulyao.dev/blog/${article.slug}`}
                  quote={article.title}
                >
                  <FaFacebookF size={19} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={`https://www.trulyao.dev/blog/${article.slug}`}
                  title={article.title}
                  related={["trulyao", "frikax", "breegehq"]}
                >
                  <FaTwitter size={19} />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={`https://www.trulyao.dev/blog/${article.slug}`}
                  title={article.title}
                  separator="-"
                >
                  <FaWhatsapp size={19} />
                </WhatsappShareButton>
                <TelegramShareButton
                  url={`https://www.trulyao.dev/blog/${article.slug}`}
                  title={article.title}
                >
                  <FaTelegramPlane size={19} />
                </TelegramShareButton>
              </div>
            </div>
            <Footer />
          </main>
        </div>
      ) : (
        <main className="flex flex-col w-screen h-screen items-center justify-center space-y-5">
          <h1 className="text-5xl">Oops!</h1>
          <h4 className="w-[80%] mx-auto text-center text-sm">
            This piece only exists in limbo...
          </h4>
          <Back />
        </main>
      )}
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  const query = await fetch(`${API_URL}/article/${slug}`);
  const response = await query.json();
  // console.log(response);

  return {
    props: {
      article: response?.data || null,
    },
  };
};
export default SinglePost;
