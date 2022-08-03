const artworks = [
  {
    id: '0',
    description: 'The Goddess Flora by Luca Giordano',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/La_diosa_Flora.jpg',
  },
  {
    id: '1',
    description: 'The Swing by Jean-Honore Fragonard',
    src: 'https://mymodernmet.com/wp/wp-content/uploads/2019/11/fragonard-the-swing-1.jpg'
  },
  {
    id: '2',
    description: 'Old Woman and Boy with Candles by Peter Paul Rubens',
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Peter_Paul_Rubens_-_Old_Woman_and_Boy_with_Candles.jpg',
  },
  {
    id: '3',
    description: 'The  Love Letter by Francois Bouche',
    src: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/boucher-the-love-letter-1750-francois-boucher.jpg'
  },
  {
    id: '4',
    description: 'Lady of Shalott by John William Waterhouse',
    src: 'http://2.bp.blogspot.com/_mbIqWEz9OGs/TUxyEAkEyfI/AAAAAAAAAHA/9UUJSVgr7yw/s1600/John+William+Waterhouse+-+The+Lady+of+Shalott+%25281888%2529+OAL+%2528153+x+200+cm%2529.jpg'
  },
  {
    id: '5',
    description: 'God Speed! by Edmund Blair Leighton',
    src: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_802/MTc0NjQxMDc5NDUzNTU4NzI5/medieval-women.webp',
  },
  {
    id: '6',
    description: 'A Study of Colors by Symeon Sabbides',
    src: 'https://64.media.tumblr.com/5f2889d9daa943aa66386e4b7bb3f38e/tumblr_oc1vxaOMKS1rpbpcio1_1280.jpg',
  },
  {
    id: '7',
    description: 'The Last Day of Pompeii by Karl Briullov',
    src: 'https://todiscoverrussia.com/wp-content/uploads/2014/09/The-Last-Day-of-Pompeii-by-Karl-Briullov.jpg'
  },
  {
    id: '8',
    description: 'Bentheim Castle by Jacob Isaakszoon van Ruisdael',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Il_castello_di_Bentheim_%28Jacob_Van_Ruisdael%29.jpg',
  },
  {
    id: '9',
    description: 'The Chateau Het Steen with Hunter by Peter Paul Rubens',
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Peter_Paul_Rubens_-_A_View_of_Het_Steen_in_the_Early_Morning.jpg',
  },
  {
    id: '10',
    description: 'The Spoiled Child by Jean-Baptiste Greuze',
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Jean-Baptiste_Greuze_-_Spoiled_Child_%281760s%29.jpg',
  },
  {
    id: '11',
    description: 'Vanitas Still Life by Maria van Oosterwijck',
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Maria_van_Oosterwijck%2C_Kunsthistorisches_Museum_Wien%2C_Gem%C3%A4ldegalerie_-_Vanitas-Stilleben_-_GG_5714.jpg',
  },
  {
    id: '12',
    description: 'The Night Watch by Rembrandt van Rijn',
    src: 'https://fisunguner.com/wp-content/uploads/2019/02/Rembrandt_Night-Watch.jpg',
  },
  {
    id: '13',
    description: 'The Abduction of Europa by Rembrandt van Rijn',
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Rembrandt_Abduction_of_Europa.jpg',
  },
  {
    id: '14',
    description: 'Ahasveros and Haman at the Feast of Esther by Rembrandt van Rijn ',
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Rembrandt_Harmensz_van_Rijn_-_Ahasuerus%2C_Haman_and_Esther_-_Google_Art_Project.jpg',
  },
  {
    id: '15',
    description: 'The Potato Eaters by Vincent van Gogh',
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg',
  },
  {
    id: '16',
    description: 'Flora by Rembrandt van Rijn',
    src: 'https://i.pinimg.com/originals/bc/45/97/bc459715fc4374915339cebf6bc40781.jpg',
  },
  {
    id: '17',
    description: 'The Banquet of Cleopatra by Jacob Jordaens',
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Jacob_Jordaens_-_Cleopatra%27s_Feast_-_WGA11990.jpg',
  },
  {
    id: '18',
    description: 'The Meeting(from the Loves of the Shepherds) by Jean-Honoré Fragonard',
    src: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F6REIE_q1N39fFUzjxFM74w%2Fnormalized.jpg&width=910&quality=80',
  },
  {
    id: '19',
    description: 'Charles III Dining Before the Court by Luis Paret y Alcázar',
    src: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FV_P6fVqnJJuSr3QNpKnCLw%252FCarlos_III_comiendo_ante_su_corte.jpg&width=910&quality=80',
  },
  {
    id: '20',
    description: 'The Settlement by William Hogarth',
    src: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FZ29NOln-e62wA0uaT2kabQ%2Fnormalized.jpg&width=910&quality=80',
  },
  {
    id: '21',
    description: 'Tristan and Isolde by Edmund Blair Leighton',
    src: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_1035/MTc0NjQxMDc5NDUzNzU1MzM3/medieval-women.webp',
  },
  {
    id: '22',
    description: 'The Soul of the Rose by John William Waterhouse',
    src: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/soul-of-the-rose-1908-john-william-waterhouse.jpg'
  },
  {
    id: '23',
    description: 'The Storm on the Sea of Galilee by Rembrandt',
    src: 'https://www.rembrandtpaintings.com/images/paintings/the-storm-on-the-sea-of-galilee.jpg'
  },
  {
    id: '24',
    description: 'Lady with an Ermine by Leonardo da Vinci',
    src: 'https://www.artandobject.com/sites/default/files/styles/gallery_item/public/fig-7-411bis-7r4m50e-tif-3200px.jpg?itok=lUiQGEmn',
  },
  {
    id: '25',
    description: 'The Love Letter by Jean- Honore Fragonard',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Jean_Honore_Fragonard_The_Love_Letter.jpg',
  },
  {
    id: '26',
    description: 'Judith and her Maidservant by Artemisia Gentileschi',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Artemisia_Gentileschi_Judith_Maidservant_DIA.jpg',
  },
]

module.exports = {
  artworks,
}
