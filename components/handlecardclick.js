function handleCardClick(event) {
  const sidebarElements = document.querySelectorAll(".sidebar-menu-item");
  const cardTextContent = event.target.textContent;
  const mediaSmall = window.matchMedia("(max-width: 767px)");
  const mediaLarge = window.matchMedia("(min-width: 767px)");

  const InitiateSidebarActions = () => {
    sidebarElements.forEach((sidebarElement) => {
      if (mediaSmall.matches) {
        if (
          // Open sidebar item with the same text as Card and is not open already
          cardTextContent === sidebarElement.textContent &&
          !sidebarElement.parentNode.parentNode.classList.contains("open")
        ) {
          console.log(
            `Page is small. Text matches and it is not open already, open sidebar ${cardTextContent}`
          );
          sidebarElement.click();
        } else if (
          // Close sidebar items where text doesn't match Card and they are open
          cardTextContent !== sidebarElement.textContent &&
          sidebarElement.parentNode.parentNode.classList.contains("open")
        ) {
          console.log(
            `Page is small. Text matches and is open already, close sidebar ${
              cardTextContent !== sidebarElement.textContent
                ? sidebarElement.textContent
                : ""
            }`
          );
          sidebarElement.click();
        }
      }

      if (mediaLarge.matches) {
        if (cardTextContent === sidebarElement.textContent) {
          // Open sidebar item with the same text as Card
          console.log(
            `Page is large. Text matches, open sidebar ${cardTextContent}`
          );
          sidebarElement.click();
        } else if (
          // Close sidebar items where text doesn't match Card and they are open
          cardTextContent !== sidebarElement.textContent &&
          sidebarElement.parentNode.parentNode.classList.contains("open")
        ) {
          console.log(
            `Page is large. Text matches and is open already, close sidebar  ${
              cardTextContent !== sidebarElement.textContent
                ? sidebarElement.textContent
                : ""
            }`
          );
          sidebarElement.click();
        }
      }
    });
  };

  InitiateSidebarActions();
}

export { handleCardClick };
