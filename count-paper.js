/*
book 1 ==> 100 pages;
book 2 ==> 200 pages;
book 3 ==> 300 pages;

*** Take these 3 books quantity as input and give total pages as output.
*/

function countPage(book1, book2, book3){
    let bookPage01 = 100;
    let bookPage02 = 200;
    let bookPage03 = 300;
    let totalPage = (book1 * bookPage01) + (book2 * bookPage02) + (book3 * bookPage03);
    console.log(totalPage);
}
countPage(5, 2, 1);
