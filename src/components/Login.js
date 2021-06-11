const Login = (props) => {
  return (
    <div className="h-full w-screen">
      <div className="flex justify-center items-center content-center w-screen h-screen flex-col">
        <div className=" w-1/3 mx-3">
          <img src="/images/cta-logo-one.svg" alt="" />
          <button class="w-full bg-green-500 active:bg-green-700 text-white font-bold py-2 my-2 rounded 2xl:py-4">
            GET All THERE
          </button>
          <p className="my-1">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img className="mt-2" src="/images/cta-logo-two.png" alt="" />
        </div>
      </div>
      <div style={{
        height: "100%",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("/images/login-background.jpg")`,
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        zIndex: -1,
      }}>
      </div>
    </div >
  );
};

export default Login;
