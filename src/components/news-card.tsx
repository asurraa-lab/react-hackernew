import axios from "axios";
import { FC, Fragment, useEffect, useState } from "react";

interface HackernewDataProps {
  numberOrder: number;
  title: string;
  url: string;
  point: number;
  by: string;
}

export interface NewsCardProps {
  id: number;
  index: number;
}

export const NewsCard: FC<NewsCardProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [itemState, setItemState] = useState<HackernewDataProps>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`
      )
      .then((res) => {
        console.log("res", res);
        const dataRes: HackernewDataProps = res.data;
        setItemState(dataRes);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [props.id]);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div
      style={{
        padding: 5,
        height: 35,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        overflow: "hidden",
      }}
    >
      <a href={itemState?.url}>
        <div>
          {props.index} . {itemState?.title}({itemState?.url})
        </div>

        <div style={{ fontSize: 10, paddingLeft: 20 }}>
          {itemState?.point} points by {itemState?.by}
        </div>
      </a>
    </div>
  );
};
