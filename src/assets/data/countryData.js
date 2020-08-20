const countryData = [
    {
        "url": "https://www.israelhayom.co.il/sites/default/files/styles/wysiwyg/public/media-fotoweb/images/bc470587c295fddc0aa995bd00d038dbad50e5896f184174ed8b95f059d9e0e7.jpg",
        "id": "1",
        "name": "United States",
        "description" : "Each area has its own rules and it is advisable to check the rules before booking the flight ticket. But in most countries it is possible to enter, in some you will have to present a negative corona test and in some you will be asked to enter isolation on a voluntary basis only, this is not a binding law.",
        "price" : 1000,
        "isFavorite": false,
        "canGo": true
    },

    {
        "url": "https://www.israelhayom.co.il/sites/default/files/styles/wysiwyg/public/media-fotoweb/images/e43ea8b2c3a90e368659cda6461ac1e6176e67260c37f2d92f28c435fdce4839.jpg",
        "id": "2",
        "name": "Iceland",
        "description" : "Iceland is one of the few countries to have declared victory over the virus. The number of people infected with it is very low and it has opened its doors to tourists. Iceland requires the presentation of valid corona tests at the entrance to the country and thus basically tourists do not have to go into isolation and can travel in it.",
        "price" : 800,
        "isFavorite": false,
        "canGo": true
    },

    {
        "url": "https://cdn.theatlantic.com/thumbor/T5o9X5Rmqj0tvLjJvzHGjYcQYGk=/600x417/media/img/photo/2018/09/a-photo-trip-to-croatia/c01_442536130/original.jpg",
        "id": "3",
        "name": "Croatia",
        "description" : "The morbidity situation in Croatia is not good, but it has opened its gates to tourists. Everyone who enters should present a negative corona test from the last 48 hours and is required to fill out a health declaration form.",
        "price" : 700,
        "isFavorite": false,
        "canGo": true
    },

    {
        "url": "https://www.telechofesh.co.il/wp-content/uploads/fly-images/31234/-930x580-c.jpg",
        "id": "4",
        "name": "Turkey",
        "description" : "Tourists can enter the country after undergoing a heat test and signing a health declaration form. Checks will soon be conducted at the expense of the state at the airport, similar to what is happening in Iceland. The main airport in Istanbul has already set up an array of 40,000 tests that can be performed simultaneously.",
        "price" : 500,
        "isFavorite": false,
        "canGo": true
    },

    {
        "url": "https://www.israelhayom.co.il/sites/default/files/styles/wysiwyg/public/media-fotoweb/images/5c8748c292d5d8e956510281bd3461246c13c0b3e405f65c4ecd2f88877bafea.jpg",
        "id": "5",
        "name": "Mexico",
        "description" : "n the routine days it is one of the most beautiful and fascinating countries in the world. Mexico has not closed its gates throughout the Corona period, but it is important to note that the morbidity situation there is not good and despite the tempting possibility, there are very high infection rates in Mexico and it is considered dangerous these days.",
        "price" : 1200,
        "isFavorite": false,
        "canGo": true
    },

    
    {
        "url": "https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer4/2016/02/15/6821177/682116001001296640360no.jpg",
        "id": "6",
        "name": "Dominican Republic",
        "description" : "The Dominican Republic relies heavily on tourism and like many countries in the world has opened its gates to tourists. Everyone who enters the country will undergo a health check, which mainly includes heat tests and without the need for insulation - will be able to go out and travel." ,
        "price" : 1000,
        "isFavorite": false,
        "canGo": true
    },

    
    {
        "url": "https://www.lametayel.co.il/limages/79293717750afca25bd847cdba94af26.jpg?size=830x467",
        "id": "7",
        "name": "Montenegro" ,
        "description" : "Entry into the country is possible after presenting a negative corona test from the last 72 hours.",
        "price" : 550,
        "isFavorite": false,
        "canGo": true
    },

    
    {
        "url": "https://img.mako.co.il/2018/07/22/leoks_x5.jpg",
        "id": "8",
        "name": "Spain",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },

    {
        "url": "https://www.masa.co.il/wp-content/uploads/2016/10/italy.jpg",
        "id": "9",
        "name": "Italy",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },

    {
        "url": "https://www.masa.co.il/MASA/_fck_uploads/1-tbilisi.jpg",
        "id": "10",
        "name": "Georgia",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },


    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/1_Saint_Basils_Cathedral.jpg/330px-1_Saint_Basils_Cathedral.jpg",
        "id": "11",
        "name": "Russia",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },

    {
        "url": "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/024/811/slideshow/c56bd725101bef2aaef43b0def6a24c7/england-london-big-ben-river-night.jpg",
        "id": "12",
        "name": "England",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },


    {
        "url": "https://www.studying-in-germany.org/wp-content/uploads/2018/07/German-Culture-and-Traditions-1068x712.jpg",
        "id": "13",
        "name": "Germany",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },


    {
        "url": "https://mk0cs00242yfx7ww7i54.kinstacdn.com/wp-content/uploads/sites/5/view-of-machu-picchu-in-peru-a-peru-family-adventure-1536x864.jpg",
        "id": "14",
        "name": "Peru",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },

    {
        "url":"https://static9.depositphotos.com/1625039/1145/i/950/depositphotos_11458356-stock-photo-rocky-mountains.jpg" ,
        "id": "15",
        "name": "Canada",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },

    {
        "url": "https://www.planetware.com/wpimages/2020/02/greece-in-pictures-beautfiul-places-to-photograph-santorini-oia.jpg",
        "id": "16",
        "name": "Greece",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },

    {
        "url": "https://img.emg-services.net/HtmlPages/HtmlPage2129/portugal-header.jpg",
        "id": "17",
        "name": "Portugal",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },

    {
        "url": "https://www.rd.com/wp-content/uploads/2020/01/australia.jpg",
        "id": "18",
        "name": "Australia",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },

    {
        "url": "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_750,c_fill,g_auto,h_422,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121113-hungary---travel-destination---shutterstock-367955912.jpg",
        "id": "19",
        "name": "Hungary",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },

    {
        "url": "https://www.brightwaterholidays.com/media/4070/gardens-costa-rica-arenal-volcano-in-costa-rica-hero.jpg?center=0.43%2C0.5&mode=crop&heightRatio=1&width=1024&quality=70",
        "id": "20",
        "name": "Costa Rica",
        "description" : "No entry at this time",
        "price" : "-",
        "isFavorite": false,
        "canGo": false
    },


]
export default countryData