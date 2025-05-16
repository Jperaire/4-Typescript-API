const blobClasses = ["blob-1", "blob-2", "blob-3"];
const blobContainer = document.querySelector(".magicpattern");
export const changeBlobShape = () => {
    if (!blobContainer)
        return;
    blobContainer.classList.remove(...blobClasses);
    const random = Math.floor(Math.random() * blobClasses.length);
    blobContainer.classList.add(blobClasses[random]);
};
