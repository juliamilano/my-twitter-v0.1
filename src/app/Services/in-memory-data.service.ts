import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tweets = [{
        id: 5,
        name: "Enricke Gia",
        link: "@gia-gia",
        time: "1h22m",
        text: "onec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ",
        image: "assets/img/photo-bridge.jpg",
        width: 400,
        alt: "1",
        imgAvatar: "https://www.w3schools.com/w3images/avatar2.png",
        imgAvatarWidth: 60,
        imgAvatarAlt: "Enricke Gia"
      },
      { id: 12,
        name: "Andy Ford",
        link: "@andy-ford",
        time: "1h22m",
        text: "Lorem.. Lorem...",
        image: "assets/img/slider.jpg",
        width: 400,
        alt: "1",
        imgAvatar: "https://www.w3schools.com/w3images/avatar2.png",
        imgAvatarWidth: 60,
        imgAvatarAlt: "Andy Ford"
      },
        {
          id: 13,
          name: "Deiva Kurban",
          link: "@i_am_girl",
          time: "1h52m",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. ",
          image: 'assets/img/slider2.jpg',
          width: 400,
          alt: '2',
          imgAvatar: 'https://secure11.securewebexchange.com/hardsignal.com/images/img_avatar2.png',
          imgAvatarWidth: 60,
          imgAvatarAlt: "Deiva"
        },
        {
          id: 14,
          name: 'Maria Velverde',
          link: "@ma_shka",
          time: "2h42m",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. ",
          image: "assets/img/slider3.jpg",
          width: 400,
          alt: "3",
          imgAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2R4EhRk9s6eijGUmAqeQCAAbzwVZ1JH1qlEw5umQdcf0NOZhg',
          imgAvatarWidth: 60,
          imgAvatarAlt: "Maria"
        }];

    const topUsers = [{
      id: 13,
      name: "Deiva Kurban",
      imgLink: "",
      ingSize: 20,
      topNumber: 1297,
      link: "app-article-1",
      textContent: "Lorem1hnhgncghngn h fghgh"
    },{
      id: 38,
      name: "Abrhhhha Cadabra",
      imgLink: "",
      ingSize: 20,
      topNumber: 897,
      link: "app-article-2",
      textContent: "Lorem1hnhgncghngn h fghgh"
    },{
      id: 128,
      name: "Abra Cadabra",
      imgLink: "",
      ingSize: 20,
      topNumber: 899,
      link: "app-article-3",
      textContent: "Lorem1452452452"
    },{
      id: 100,
      name: "Cadabra Cadabra",
      imgLink: "",
      ingSize: 20,
      topNumber: 532,
      link: "app-article-4",
      textContent: "Lorem477838387"
    },{
      id: 85,
      name: "Santa Cadabra",
      imgLink: "",
      ingSize: 20,
      topNumber: 933,
      link: "app-article-5",
      textContent: "Lorem444"
    },{
      id: 40,
      name: "Piu Cadabra",
      imgLink: "",
      ingSize: 20,
      topNumber: 799,
      link: "app-article-6",
      textContent: "Lorem5555"
    },{
      id: 96,
      name: "Stefan Batoriy",
      imgLink: "",
      ingSize: 20,
      topNumber: 1706,
      link: "app-article-7",
      textContent: "Lorem5555"
    },{
      id: 17,
      name: "Mia Nia",
      imgLink: "",
      ingSize: 20,
      topNumber: 1136,
      link: "app-article-7",
      textContent: "Lorem5555"
    },{
      id: 27,
      name: "Max Lulli",
      imgLink: "",
      ingSize: 20,
      topNumber: 1696,
      link: "app-article-7",
      textContent: "Lorem5555"
    }, {
      id: 34,
      name: "Maria Casino",
      imgLink: "",
      ingSize: 20,
      topNumber: 1400,
      link: "app-article-7",
      textContent: "Lorem5555"
    }];

    const followedUsers = [{
        id: 13,
        name: "Deiva Kurban"
    }];

    return {tweets, topUsers, followedUsers};
  }
}
