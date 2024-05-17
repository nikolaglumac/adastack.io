function handleHeaderButtonClick(event) {
  const buttonTitleTag = event.target.title;
  const sidebarElements = document.querySelectorAll(".sidebar-menu-item");
  const sidebar = document.querySelector(".nextra-sidebar-container");
  const sidebarButtons = document.querySelectorAll(
    ".nextra-sidebar-container li button.nx-items-center"
  );
  const html = document.documentElement;

  const mediaSmall = window.matchMedia("(max-width: 767px)");
  const mediaLarge = window.matchMedia("(min-width: 767px)");

  // Open relevant sidebar (dropdown on mobile) category menus when clicking Button.
  const openAndCloseSidebarMenus = () => {
    sidebarElements.forEach((sidebarElement) => {
      if (mediaSmall.matches) {
        if (
          // Open sidebar menu that is not open yet && text matches Button's title tag
          buttonTitleTag === sidebarElement.textContent &&
          !sidebarElement.parentNode.parentNode.classList.contains("open")
        ) {
          sidebarElement.click();
        } else if (
          // Close  sidebar menus that are open && text doesn't match Button's title tag
          buttonTitleTag !== sidebarElement.textContent &&
          sidebarElement.parentNode.parentNode.classList.contains("open")
        ) {
          sidebarElement.click();
        }
      }

      if (mediaLarge.matches) {
        if (buttonTitleTag === sidebarElement.textContent) {
          // Open sidebar menu where the text matches Button's title tag
          sidebarElement.click();
        } else if (
          // Close sidebar menus that are open && text doesn't match Button's title tag
          buttonTitleTag !== sidebarElement.textContent &&
          sidebarElement.parentNode.parentNode.classList.contains("open")
        ) {
          sidebarElement.click();
        }
        if (buttonTitleTag === "Explore All") {
          sidebarButtons.forEach((sidebarElement, index) => {
            setTimeout(() => {
              // Add your CSS changes here for each sidebar element
              // For example, changing text color
              if (html.classList.contains("light")) {
                sidebarElement.classList.add("light-sidebar-item-highlighted");
              }
              if (html.classList.contains("dark")) {
                sidebarElement.classList.add("dark-sidebar-item-highlighted");
              }

              // Reset the CSS
              setTimeout(() => {
                if (html.classList.contains("light")) {
                  sidebarElement.classList.remove(
                    "light-sidebar-item-highlighted"
                  );
                }

                if (html.classList.contains("dark")) {
                  sidebarElement.classList.remove(
                    "dark-sidebar-item-highlighted"
                  );
                }
              }, 120);
            }, index * 120); // Delay each sidebar item
          });
        }
      }
    });
  };

  openAndCloseSidebarMenus();
}

export { handleHeaderButtonClick };
