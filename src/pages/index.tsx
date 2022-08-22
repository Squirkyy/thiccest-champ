import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-primary">Hello</button>
      <div className="flex flex-row">
        <div className="mockup-code justify-center">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>

          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Home;
