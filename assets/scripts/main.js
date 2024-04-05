/**
 * @author Elmahdi KORFED <elmahdi.korfed@gmail.com>
 */

//--- for JS selection
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const _data = [{
    title: "alleyway",
    src: "https://image.konsolenkost.de/item/images/9005381/full/9005381-0.jpg",
    video: "https://www.youtube.com/watch?v=KxMEJm4hwZE&ab_channel=RetroArchives",
    price: 1989
}, {
    title: "baseball",
    src: "http://www.retroplace.com/pics/gameboy/packshots/32528--baseball.png",
    video: "https://www.youtube.com/watch?v=8zgC4qhKvIM&ab_channel=NintendoComplete",
    price: 1989
}, {
    title: "super mario land",
    src: "https://level-1.fr/Principal/wp-content/uploads/2020/01/gb_supermarioland-1024x911.jpg",
    video: "https://www.youtube.com/watch?v=3e4Qgl2e_T0&ab_channel=LoganBenjamin",
    price: 1989
}, {
    title: "yakuman",
    src: "https://images.launchbox-app.com/2b8f7a87-7447-4677-8efd-0ccb9e6fb341.jpg",
    video: "https://www.youtube.com/watch?v=6Kv1jnIWkBg&ab_channel=GameboyChallenger",
    price: 1989
}, {
    title: "tennis",
    src: "https://m.media-amazon.com/images/I/61KnKZpr4CL._AC_SX466_.jpg",
    video: "https://www.youtube.com/watch?v=Iax0P3iIXYA&ab_channel=WorldofLongplays",
    price: 1989
}, {
    title: "tetris",
    src: "https://www.gamecash.fr/thumbnail-600/tetris-pal-e171136.jpg",
    video: "https://www.youtube.com/watch?v=VNbo1AGqKrI&ab_channel=WorldofLongplays",
    price: 1989
}, {
    title: "shanghai",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqfzh6q2u5iOCDkP2rclaCCYYXw72tWkStuRadUiJafE8aRQv104uThwiu0ZdJajtWrk&usqp=CAU",
    video: "https://www.youtube.com/watch?v=2q2z1hGWbfk&ab_channel=Reinc",
    price: 1989
}, {
    title: "boxxle",
    src: "https://image.jeuxvideo.com/images/gb/b/o/boxxgb0f.jpg",
    video: "https://www.youtube.com/watch?v=a1rkDSM7POs&ab_channel=Dugongue",
    price: 1989
}, {
    title: "The Bugs Bunny Crazy Castle",
    src: "https://wowroms-photos.com/emulators-roms-logo/26/9032/420-420/Bugs-Bunny-Crazy-Castle,-The-(USA,-Europe).jpg",
    video: "https://www.youtube.com/watch?v=OdIt6TWtqy8&ab_channel=nineko",
    price: 1989
}, {
    title: "Motocross Maniacs",
    src: "https://www.gamecash.fr/thumbnail-600/motocross-maniacs-e111894.jpg",
    video: "https://www.youtube.com/watch?v=wGjAG5wvqNo&ab_channel=nineko",
    price: 1989
}, {
    title: "Hyper Lode Runner: The Labyrinth of Doom",
    src: "https://www.mobygames.com/images/covers/l/253293-hyper-lode-runner-game-boy-front-cover.png",
    video: "https://www.youtube.com/watch?v=y7jjTJ89QNo&ab_channel=arronmunroe",
    price: 1989
}, {
    title: "Pinball: Revenge of the 'Gator",
    src: "https://www.gamecash.fr/thumbnail-400-450/gb-revenge-of-the-gator-e158882.jpg",
    video: "https://www.youtube.com/watch?v=NKeoPSPm4kw&ab_channel=WorldofLongplays",
    price: 1989
}, {
    title: "Castlevania: The Adventure",
    src: "https://image.jeuxvideo.com/images/gb/c/a/casagb0f.jpg",
    video: "https://www.youtube.com/watch?v=xgGcNWhRv24&ab_channel=NintendoComplete",
    price: 1989
}]

window.onload = _ => {
    for (let i = 0; i < _data.length; i++) $(`#ul_data`).insertAdjacentHTML('beforeEnd', `<li><a href="${_data[i].video}" target="_blank"><div class="div_product"><img src="${_data[i].src}"><p>${_data[i].title}</p><p>${_data[i].price} €</p></div></a></li>`);
}
