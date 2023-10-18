import data from "../data.json";
import Login from "./Login";

interface IHome {
  isLogin: boolean;
  setIsLoginFuntion: any;
}

export default function Home({ isLogin, setIsLoginFuntion }: IHome) {
  if (!isLogin)
    return <Login isLogin={isLogin} setIsLoginFuntion={setIsLoginFuntion} />;

  return (
    <div>
      <h1 className="text-xl mb-4 font-bold">My Personal Data</h1>
      {data.map((item) => (
        <Card key={item.url} {...item} />
      ))}
    </div>
  );
}

interface ICard {
  title: string;
  url: string;
}

const Card = ({ title, url }: ICard) => {
  return (
    <div className="mb-7 pb-2 border-b border-white">
      <h2>{title}</h2>
      <img className="max-w-sm" src={"/secretImages01" + url} alt={title} />
    </div>
  );
};
