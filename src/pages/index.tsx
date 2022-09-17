import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex w-2/3 justify-evenly">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal">OR</div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
