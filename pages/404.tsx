import { NextPage } from "next";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const NotFoundPage: NextPage = () => {
    return (
        <section className="justify-center items-center mt-[60px] pt-[8vh] theme-styles">
            <div className="flex flex-col justify-center items-center border border-dashed border-slate-300 p-4 rounded-lg gap-4">
                <h1>Not Found</h1>
                <p>Your requested url is incorrect</p>
                <Link href="/">
                    <a className="btn-alt">
                        <AiOutlineArrowLeft /> Go Back
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
