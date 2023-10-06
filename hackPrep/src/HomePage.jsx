import React, { useEffect } from 'react';
import './homePage.css'; // Import your CSS file here

function HomePage() {
  useEffect(() => {
    // Your JavaScript logic goes here
    const body = document.querySelector("body");
    const darkLight = document.querySelector("#darkLight");
    const sidebar = document.querySelector(".sidebar");
    const submenuItems = document.querySelectorAll(".submenu_item");
    const sidebarOpen = document.querySelector("#sidebarOpen");
    const sidebarClose = document.querySelector(".collapse_sidebar");
    const sidebarExpand = document.querySelector(".expand_sidebar");

    sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

    sidebarClose.addEventListener("click", () => {
      sidebar.classList.add("close", "hoverable");
    });

    sidebarExpand.addEventListener("click", () => {
      sidebar.classList.remove("close", "hoverable");
    });

    sidebar.addEventListener("mouseenter", () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
      }
    });

    sidebar.addEventListener("mouseleave", () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
      }
    });

    darkLight.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        // You can implement the logic for dark mode here
        darkLight.classList.replace("bx-sun", "bx-moon");
      } else {
        // You can implement the logic for light mode here
        darkLight.classList.replace("bx-moon", "bx-sun");
      }
    });

    submenuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        item.classList.toggle("show_submenu");
        submenuItems.forEach((item2, index2) => {
          if (index !== index2) {
            item2.classList.remove("show_submenu");
          }
        });
      });
    });

    if (window.innerWidth < 768) {
      sidebar.classList.add("close");
    } else {
      sidebar.classList.remove("close");
    }
  }, []);

  return (
    <div>
      {/* Your JSX content for the homepage goes here */}
    </div>
  );
}

export default HomePage;
