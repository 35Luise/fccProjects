function getBookmarks() {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (
      Array.isArray(bookmarks) &&
      bookmarks.every(
        bookmark =>
          bookmark &&
          typeof bookmark === "object" &&
          "name" in bookmark &&
          "category" in bookmark &&
          "url" in bookmark
      )
    ) {
      return bookmarks;
    }

    return [];
  } catch (error) {
    return [];
  }
}

const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

const addBookmarkButton = document.getElementById("add-bookmark-button");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.querySelector(".category-name");

addBookmarkButton.addEventListener('click', () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

const closeFormButton = document.getElementById("close-form-button");

closeFormButton.addEventListener('click', () => {
  displayOrCloseForm();
});

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");

addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();

  const bookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value
  };

  bookmarks.push(bookmark);

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  nameInput.value = '';
  urlInput.value = '';
  displayOrCloseForm();
});

const bookmarkListSection = document.getElementById("bookmark-list-section");

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

const viewCategoryButton = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const categoryListName = document.querySelector("#bookmark-list-section .category-name");

function displayBookmarks() {
  const bookmarks = getBookmarks();

  const categoryBookmarks = bookmarks.filter(
    bookmark => bookmark.category === categoryDropdown.value
  );

  if (categoryBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  }

  if (categoryBookmarks.length > 0) {
    categoryList.innerHTML = "";

    categoryBookmarks.forEach(bookmark => {
      categoryList.innerHTML += `
        <input
          type="radio"
          id="${bookmark.name}"
          value="${bookmark.name}"
          name="bookmark"
        >
        <label for="${bookmark.name}">
          <a href="${bookmark.url}">${bookmark.name}</a>
        </label>
      `;
    });
  }
}

viewCategoryButton.addEventListener("click", () => {
  categoryListName.innerText = categoryDropdown.value;

  displayBookmarks();

  displayOrHideCategory();
});

const closeListButton = document.getElementById("close-list-button");

closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});

const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

deleteBookmarkButton.addEventListener("click", () => {
  const selectedBookmark = document.querySelector(
    'input[name="bookmark"]:checked'
  );

  if (!selectedBookmark) {
    return;
  }

  const bookmarkName = selectedBookmark.value;
  const bookmarks = getBookmarks();

  const updatedBookmarks = bookmarks.filter(
    bookmark =>
      !(
        bookmark.name === bookmarkName &&
        bookmark.category === categoryDropdown.value
      )
  );

  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  displayBookmarks();
});