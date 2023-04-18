let featheredFriends = [
  "https://www.thesprucepets.com/thmb/x8k0MnX-5MiCJCAVuV3kxnspTOs=/4535x0/filters:no_upscale():strip_icc()/rainbow-lorikeets--trichoglossus-moluccanus--perching-on-branch--paradise-wildlife-park--broxbourne--hertfordshire--england--uk-976978800-d7143424b9484992939a1f51310bb3d6.jpg",
  "https://i.guim.co.uk/img/media/385bf682cde35622a18afb043d85bea913ad5da6/0_53_3919_2352/master/3919.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=91c34357eb3a95ad723bc0727266f248",
  "https://images.squarespace-cdn.com/content/v1/587d6250d482e9eee8c47666/1609557580378-SM6G65VOV8P1B425ESM3/1D3F1580.jpg?format=1000w",
  "https://a-z-animals.com/media/2022/06/Lovebirds-on-fence.jpg",
  "https://www.sydneytoptours.com/blog/wp-content/uploads/2019/11/Galah-in-Blue-Mountains-1024x678.jpg",
  "https://customsitesmedia.usc.edu/wp-content/uploads/sites/59/2019/11/16024710/Taiwan-Blue-Magpie-web.jpg",
  "https://www.australiangeographic.com.au/wp-content/uploads/2018/06/crimson-rosella.jpg?quality=75",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpPpJuy789jhICB26daYBeB-Jac6VA2OUfA&usqp=CAU",
  "https://www.lovethegarden.com/sites/default/files/styles/large/public/content/articles/UK_community-fun-facts-19-common-british-birds-you-can-find-your-garden_main.jpg?itok=2qrWrsD7",
  "https://hips.hearstapps.com/hmg-prod/images/vulturine-guineafowl-in-kenya-on-july-12-2009-news-photo-1604502728.?crop=1.00xw:0.710xh;0.00160xw,0.197xh&resize=1200:*",
  "https://freewp.cfsscloud.hk/idb/wp-content/uploads/sites/21/2018/02/3372966539_e92a8b08f5_o.jpg",
  "https://img.theweek.in/content/dam/week/news/sci-tech/images/2022/4/5/macaw-bird.jpg",
  "https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3Aa2134beeb29dc276a1fc30568e38fee5b5ed53c4af3570ce31d5126f%2BIMAGE_TINY%2BIMAGE_TINY.1",
  "https://pickytop.com/wp-content/uploads/2020/01/Nicobar-Pigeon_2-1024x676.jpg",
  "https://i.pinimg.com/736x/84/d2/2d/84d22d672fac7724c2ef475bf2045482.jpg",
];

let counter = 0;

let birdImageTimer = setInterval(() => {
  document.getElementById("seconds").innerHTML = counter;
  counter++;
  let choice = featheredFriends[Math.floor(Math.random() * 14)];
  document.getElementById("feathers").src = choice;
  setTimeout(() => {
    clearInterval(birdImageTimer);
    document.getElementById("feathers").style.display = "none";
    document.getElementById("endMessage").style.display = "block";
  }, 60000);
}, 1000);
