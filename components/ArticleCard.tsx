import type { FC } from "react";
import Link from "next/link";
import Moment from "react-moment";
const readingTime = require("reading-time");

interface Props {
  article: any;
}

const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <>
      <Link href={"/blog/" + article?.slug} passHref>
        <div className="py-4 lg:py-6 px-3 lg:px-2 text-left lg:text-sm hover:bg-neutral-900 hover:bg-opacity-60 cursor-pointer Article-Card">
          <h1 className="text-5xl lg:text-5xl">{article?.title}</h1>

          <div className="text-[10px] flex items-center justify-between my-2">
            <Moment
              format="MMM Do YYYY"
              className="font-normal text-neutral-600"
            >
              {article?.createdAt}
            </Moment>
            <p className="bg-neutral-800 text-neutral-600 px-2 py-[2px]">
              {readingTime(article?.content?.text).text}
            </p>
          </div>
          <p className="text-[14px] lg:text-[15px] opacity-70 first-letter:uppercase my-0">
            {article?.description}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ArticleCard;
