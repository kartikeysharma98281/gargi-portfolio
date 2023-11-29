/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

import image from "../images/socials/projects-ps-bg.gif";

// const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "Admin Dashboard",
    description:
      "Admin Dashboard for websites with different statistics like monthly sales, daily sales, total customers, line chart and pie chart generated on the basis of data stored in MongoDB. It contains separate pages for Transactions, Products, Customers, a breakdown of total revenue and a performance table. -Technology: MERN Stack",
    url: "https://github.com/Gargi1971/Admin-Dashboard",
  },
  {
    title: "CashAide",
    description:
     "A Point-Of-Sale system to help food service organizations make their billing procedure hassle free. Features include category-wise food-item display, managing bills, editing item numbers for inventory, managing customers, cart functionality, option to print invoice and authentication. -",
    url: "https://github.com/Gargi1971/CashAide",
  },
  // {
  //   title: "Automobile Website",
  //   description:
  //     "This website functions as a hub for regional and small start-up businesses, and it offers automobile products and vehicles that can be personalized for exciting excursions.",
  //   url: "https://kartikeysharma98281.github.io/project1.github.io/",
  // },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt="image"
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
