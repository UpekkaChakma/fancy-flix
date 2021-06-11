import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { Link } from "react-router-dom";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div style={{ backgroundColor: "rgb(2, 21, 31)", height: '10%' }} className=" h-auto fixed flex justify-between items-center z-20 inset-x-0 top-0 px-10">
      <Link className="w-1/2 md:w-1/3" href="/">
        <h1 className="text-2xl">Fantasy Flix</h1>
      </Link>

      {!userName ? (
        <Link onClick={handleAuth}
          className="px-4 py-2 border-2 text-white border-white-600 rounded bg-transparent hover:bg-white hover:text-black"
        >
          LOGIN
        </Link>
      ) : (
        <>
          <div className="flex justify-around items-center w-2/3 hidden  md:flex">
            <Link className=" w-4 flex justify-center items-center 2xl:w-8">
              <img className="" src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span className="text-sm 2xl:text-lg">WATCHLIST</span>
            </Link>
            <Link className="w-4 flex justify-center items-center 2xl:w-8">
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span className="text-sm 2xl:text-lg">ORIGINALS</span>
            </Link>
            <Link className="w-4 flex justify-center items-center 2xl:w-8">
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span className="text-sm 2xl:text-lg ">MOVIES</span>
            </Link>
            <Link className="w-4 flex justify-center items-center 2xl:w-8">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span className="text-sm 2xl:text-lg">SERIES</span>
            </Link>
          </div>
          <div className="w-12 2xl:w-16">
            <img className="h-8 ml-1 p-1 rounded-full 2xl:h-12 " src={userPhoto} alt={userName} />
            <span className="text-xs cursor-pointer 2xl:text-base " onClick={handleAuth}>Sign out</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
