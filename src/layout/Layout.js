import {Fragment, useContext, useEffect} from "react";
import VideoPopup from "../components/VideoPopup";
import {VideoContext} from "../context/video";
import {aTagClick} from "../utils/utils";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
import Head from "next/head";

const Layout = ({
                    children,
                    navLight,
                    whiteLogo,
                    getStartText,
                    btnCustomHover,
                    navHoverColor,
                    singlePage,
                    meta
                }) => {
    const videoContext = useContext(VideoContext);
    const {video} = videoContext;
    useEffect(() => {
        aTagClick();
    }, []);

    return (
        <Fragment>
            <Head>
                <title>{`${meta && meta.title ? meta.title + ' | ' : ''}MMW Analytics Solutions GmbH`}</title>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/favicon.ico"
                />

                {/*Meta Tags*/}
                {meta && meta.description && (
                    <meta name="description" content={meta.description}/>
                )}
                {meta && meta.keywords && (
                    <meta name="keywords" content={meta.keywords}/>
                )}

                {/* OpenGraph / Facebook Meta Tags */}
                {meta && (meta.og_title || meta.title) && (
                    <meta name="og:title" content={meta.og_title || meta.title}/>
                )}
                {meta && (meta.og_image) && (
                    <meta name="og:image" content={meta.og_image}/>
                )}
                <meta name="og:type" content={(meta && meta.og_type) || "website"}/>
                <meta name="og:url" content={(meta && meta.og_url) || "https://mmw.industries"}/>
                <meta name="og:site_name" content={(meta && meta.og_site_name) || "MMW Analytics Solutions GmbH"}/>
                {meta && (meta.og_description || meta.odescription) && (
                    <meta name="og:description" content={meta.og_description || meta.description}/>
                )}

                {/* Twitter Meta Tags */}
                <meta name="twitter:type" content={(meta && meta.twitter_type) || "summary_large_image"}/>
                {meta && (meta.twitter_title || meta.og_title || meta.title) && (
                    <meta name="twitter:title" content={meta.twitter_title || meta.og_title || meta.title}/>
                )}
                {meta && (meta.twitter_description || meta.og_description || meta.description) && (
                    <meta name="twitter:description"
                          content={meta.twitter_description || meta.og_description || meta.description}/>
                )}
                {meta && (meta.twitter_image || meta.og_image) && (
                    <meta name="twitter:image" content={meta.twitter_image || meta.og_image}/>
                )}
                <meta name="twitter:site"
                      content={(meta && (meta.twitter_site || meta.og_site_name)) || "MMW Analytics Solutions GmbH"}/>
                <meta name="twitter:creator" content="MMW Analytics Solutions GmbH"/>
            </Head>
            {video.show && <VideoPopup/>}
            <div id="page" className="page">
                <Header
                    navLight={navLight}
                    whiteLogo={whiteLogo}
                    getStartText={getStartText}
                    btnCustomHover={btnCustomHover}
                    navHoverColor={navHoverColor}
                    singlePage={singlePage}
                />
                {children}
                <Footer/>
            </div>
            <ScrollTop/>
        </Fragment>
    );
};

export default Layout;
