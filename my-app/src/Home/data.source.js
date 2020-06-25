import React from "react";
export const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header0-logo",
    children: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  Menu: {
    className: "header0-menu",
    children: [
      {
        name: "item0",
        className: "header0-item",
        children: {
          href: "#about",
          children: [{ children: "About", name: "text" }],
        },
      },
      {
        name: "item1",
        className: "header0-item",
        children: {
          href: "#my-work",
          children: [{ children: "Projects", name: "text" }],
        },
      },
    ],
  },
  mobileMenu: { className: "header0-mobile-menu" },
};
export const Banner20DataSource = {
  wrapper: { className: "banner2" },
  BannerAnim: {
    children: [
      {
        name: "elem0",
        BannerElement: { className: "banner-user-elem" },
        page: { className: "home-page banner2-page" },
        textWrapper: { className: "banner2-text-wrapper" },
        bg: { className: "bg bg0" },
        title: { className: "banner2-title", children: "Hi i'm Carlos" },
        content: {
          className: "banner2-content",
          children: "React Native Developer",
        },
        button: {
          className: "banner2-button",
          children: "Learn More",
          href: "#general",
          type: "primary",
        },
      },
    ],
  },
};
export const Banner00DataSource = {
  wrapper: { id: "general", className: "banner0" },
  textWrapper: { className: "banner0-text-wrapper" },
  title: {
    className: "banner0-title",
    children: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  content: {
    className: "banner0-content",
    children:
      "Software Engineer, React Native/React Developer\n Working with clients from México, United States And Hong Kong",
  },
  button: {
    className: "banner0-button",
    children: "Learn More",
    href: "#about",
  },
};
export const Content00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [{ name: "title", children: "Development Strategy" }],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "Requirments Analysis",
            },
            {
              name: "content",
              children:
                "Interviews, compiling information from proyect and client needs",
            },
          ],
        },
      },
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "Solution Proposal",
            },
            {
              name: "content",
              children:
                "I study and propose alternatives that meet the requested requirements and functionalities, considering every detail to ensure better results for the final development.",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "Sit back and chillax",
            },
            {
              name: "content",
              children:
                "You are in the best hands, fom here you just sit back and watch your business grow up!",
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: "https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png",
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: { className: "content1-title", children: "Still thinking this part" },
  content: {
    className: "content1-content",
    children:
      "Some explanation goes here(TO DO :P), im getting tired dont judge me",
  },
};
export const Banner50DataSource = {
  wrapper: { id: "about", className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      { name: "title", children: "About Me", className: "banner5-title" },
      {
        name: "explain",
        className: "banner5-explain",
        children: `Hi, I'm a Mobile Developer with more than 4 years of experience working in web based solutions,
        Focused my career on front-end development and JavaScript technologies to build React based applications.
        `,
      },
      {
        name: "content",
        className: "banner5-content",
        children: `Committed, self-taught and dynamic, with excellent interpersonal relationships. 
                   Well known for being adaptable, and always open to learn new technologies and 
                   implementing them correctly to deliver high quality results in all projects.`,
      },
      {
        name: "button",
        className: "banner5-button-wrapper",
        children: {
          href: "#my-work",
          className: "banner5-button",
          type: "primary",
          children: "Check My Work",
        },
      },
    ],
  },
  image: {
    className: "banner5-image",
    children:
      "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ",
  },
};
export const Content30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        id: "my-work",
        name: "title",
        children: "My Work",
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: "Projects I have had the opportunity to work on",
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "BillyPays" },
          content: {
            className: "content3-content",
            children: (
              <>
                <span>
                  App for Android / iOS, initially this was an application for
                  the payment of telephone recharges, that has been growing with
                  the time, and now has services payments and even credits
                  managements. I was contacted by the provider to support them
                  in their development, my responsabilities was to make this app
                  reach production stage as soon as posible. The deliver was a
                  success and years after develop i have worked with them to
                  interview, train new employees, and add extra features and
                  keep the app updated. I also worked in an admin platform to
                  manage users, promotions and reports.
                </span>
                <span>
                  <br></br>
                  <a href="http://billypays.com/"> BillyPays Oficial Website</a>
                </span>
              </>
            ),
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Vuela a la Vida" },
          content: {
            className: "content3-content",
            children: (
              <>
                <span>
                  Vuela a la Vida is a company that looks up for the best prices
                  in flights and travel packages, for their Aniversary they
                  wanted to have an app so they can reach a greater market, the
                  app includes a super search of flights/packages, socials
                  login, and already has more than 20,000 users among both
                  stores. I was in charge of the team devoloping this app, and
                  managed to connect with their current apis used by them in
                  their web application.
                </span>
                <span>
                  <br></br>
                  <a href="https://play.google.com/store/apps/details?id=com.vlvmobile&hl=en">
                    {" "}
                    Play Store
                  </a>
                  <br></br>
                  <a href="https://apps.apple.com/us/app/vuela-a-la-vida/id1472959864">
                    {" "}
                    App Store
                  </a>
                </span>
              </>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: "Conoce a tu Encuestador",
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <span>
                  In 2020 there was a census in México, the app was a small
                  project designed to help users validate interviewers identity,
                  and have the population of diferent entities informed about
                  it. Throught the publi api rest provided by INEGI(Our National
                  institute for statistics an geography). I was in charge of the
                  app implemantation, Techs used: React Native, Redux, Redux
                  Thunk, Axios.
                </span>
                <span>
                  <br></br>
                  <a href="https://play.google.com/store/apps/details?id=io.obsidiansoft.consulta">
                    {" "}
                    Play Store
                  </a>
                </span>
              </>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Quinvera" },
          content: {
            className: "content3-content",
            children: (
              <>
                <span>
                  Application for users of Quinvera, a company that helps users
                  manage their saving, credits and invest money.
                  <br></br>
                  Techs used: React Native, Redux, Redux Saga, Api Rest, Push
                  Notifications.
                </span>
                <span>
                  <br></br>
                  <a href="https://play.google.com/store/apps/details?id=mx.quinvera">
                    {" "}
                    Play Store
                  </a>
                </span>
              </>
            ),
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Winko" },
          content: {
            className: "content3-content",
            children: (
              <>
                <span>
                  Winko App originally built in Xamarin by other company but was
                  forgoten, i was contacted to help with the redesign, update
                  and migration. Currently helping with their the for app
                  stabilization.
                  <br></br>
                  Techs used: React Native, Redux, Redux Saga, Api Rest, Push
                  Notifications.
                </span>
                <span>
                  <br></br>
                  <a href="https://play.google.com/store/apps/details?id=www.alfiltecnologia.Winko">
                    {" "}
                    Play Store
                  </a>
                  <br></br>
                  <a href="https://apps.apple.com/my/app/winko/id1436756664">
                    App store
                  </a>
                </span>
              </>
            ),
          },
        },
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "HKIA" },
          content: {
            className: "content3-content",
            children: (
              <>
                <span>
                  App built for Hong Kong Internation Airport. I was so
                  fortunate to have the opportunity to work in this project, i
                  was in charge of two apps one built for final user and one as
                  terminal for the warehouse management, unfourtunately, i can't
                  comment as much as i want about this project, or even share
                  it, since it was decided to be delivered only to closed group
                  of users. But i'm allowed to mention that this was a very huge
                  and important project for my carreer it involved the use of
                  AI, Face Recognition, Objects Detection, Offline Support, Push
                  notifications, websockets, among other functionalities.
                </span>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <>
        <span>
          ©2019 <a href="#">Carlos Julio Portafolio</a> All Rights Reserved
        </span>
      </>
    ),
  },
};
