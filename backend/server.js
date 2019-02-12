const cors = require('cors');
const express = require('express');
const knex = require('knex');
const path = require('path');
// const multer = require('multer');
// const upload = multer({ dest: 'public/uploads/'});

var filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename);

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'itzikshaoulian',
        password : '',
        database : 'hamilton-beach'
    }
});

const app = express();
app.use(cors());

app.get('/api/backgroundimages', (req, res) => {
    db.select('*').from('promotionalimages')
        .then(sliderImages => res.json(sliderImages))
    // console.log(path.basename('/public'), 'itzik')
})

app.get('/api/products', (req, res) => {
    db.select('*').from('products')
        .then(products => res.json(products))
})

app.get('/api/products/:category', (req, res) => {
    db('products').where({category: req.params.category}).select('*')
        .then(products => res.json(products))
    
})

app.get('/api/servicelocations', (req, res) => {
    db.select('*').from('servicelocations')
        .then(locations => res.json(locations))
})


const port = process.env.port || 5000;
    app.listen(port, () => {
        console.log(`Server start at ${port}`)
});



// COPY products FROM '/Users/itzikshaoulian/Desktop/hamilton-beach/backend/hamilton-beach-products-entry.csv' DELIMITER ';'


    // Connecting to a json file
    // fs.readFile('./data/sliderImages.json', (err, json) => {
    //     let obj = JSON.parse(json);
    //     res.json(obj);
    // });

    // INSERT INTO products (type, category, price, lastprice, shortdescription, mainimage, model) 
    // VALUES 
    // ('מעבד מזון' , 'food-processors', 1399, 1699,' מעבד מזון מקצועי עם שלל אביזרים ', 'https://00e9e64bac8f98a0db2d07192627841540044b6f4834946a6a-apidata.googleusercontent.com/download/storage/v1/b/hamilton-beach-israel/o/hamilton-beach-images%2F70825%2F70825-1.jpg?qk=AD5uMEsOrP63mZ7l5NeqN3W6WsC6v-wjT0rm8nLHmUDcTGDVpQb0wPgyAthJH6MvCTsGkSGat1fiYeD98VNJl_n9mfBzPYspUNGtRsAPlj9brxxQIKvWI6qH2jVK5CgoVEdzhwNOwFHfCfSW-k6_dOAIbm-RST-Kxjv_HrVFwIIc0d-koz5DudLYW82N_dwL-Sy3wNEdUfmnfzonLyG5FnSpcGJf_ctQtf1CJix3PY976q0Z6pH3ubZv4DwIVMxMS9lXcfPTnZaMShNyCHtP-n5IxlMFZ0VkykDoKPimeFPlhkcQ57QHpZM_clZzBln97GXh52GudBnSddPZFe1x9ALAFgBdFhxtFEovnvgIFdadBGSMGx7uyef_HH2enFD7itgYDbrdXplkCotamihDWox55iHibi2a4HPGyC_qOP1U8ax0lWmB8FFt2V4XgrpMMnBkx891l46_hIB_NyTzz4CNg-DU2AaHwZJUqGoTnuFUy8I_WVYtZVL9-aPI0nXzZOldSA64FJGAzchKBopJnG5GjwO4OSGIQnwsHtKZhJj1L6P5rsOrhGYRQ9ShMR1xv75J3ZQuuKHtTl1HObLfTibiNNLNNoTOf5BKy2P2_TBsYDMl0ixVfHyEpXYsTNdSZ60o0CVHUIJyxv4g2GJnvm-DtPLJ8qhmiqotZmNJfNVn4N2DmxHfdGClA8cIooLOzqtSw9c31tMPcdSyPYssCLN4ytcSpiEApkKBDH-vJNQGJ9N6lu6ntvRcZsLV_2UxdKY1TGvpeAZMzFEJZi7om-LKNRvzECv0TwJN5YAj5azryG-V6N4yD1AEjihnpgjcyGBZqWnG2W98', '70825-IS'),
    // ('סיר רב תכליתי' , 'multi-cookers', 339, 399,' סיר רב תכליתי לבישול מגוון רחב של מתכונים ', 'https://00e9e64bacbe994d388b1b1edf212e9041225e4b939400e315-apidata.googleusercontent.com/download/storage/v1/b/hamilton-beach-israel/o/hamilton-beach-images%2F37571%2F37571-1.jpg?qk=AD5uMEsDgvL-CfBFcup9E_MkTMH_McRY9Lx3qhYgLe6Eu0uHnDi8tPtcQz7myUTZHvqHyRqBjT8V2rLcQjBrjmtlVuhDDIN8N9UFjKRIC0OzJWYthBWFqIIBIdLEKrnEvBzvzERbqeTM8D0vhrmXD_-58Msvdrw0ryCGxb8STs4qiF3JtSwb55aM7CuZb9Z2-LS4dBCM63vC_vpvEVURySsWmENn-FXKWQdDDNqUG4xfqKS29kEcBuZUbii-07geVJvUUc2t_bW11_EcS0pmi4VpV7Y8vmxzLzaxCQuJlm3Be4MAhQQ-ZB3pzvIvn-9jzOEfODoD0TP3vCDWStK0rxg8J4-i-LITfXJEkVhfHWVy0wJTGlUz644zYhyFRJml-ZAD25GN3ykd5MfReAnQE_7WWrPjpn97xHBXozZf9DzFPZnSvqXAWC6WyWiR9Y2MYaCr6V58NQNerzKUoCY5t32qjNC_o1UX3ETVOR-0ofVhGC83p5P1xFqcBifZpYr00JvSK2gq1H1WMvj4dV5H5caf7afxT12zUBnF13ZjXf8y4P6axB5SNbxb2gfbDggMPZZb8bgX1laUxvVUTQz1VvOiHHt83AsZZ-6d7ZcHMgLq13_Vo1paC7CwYVLjb3hPj-uZgKHcubWp7ZUj_KJr2dOOBUBWFv4fm59t83sTnLEusChC0UmKnrxP8_XatKGxqPXNuILOogbTvv6CHFzakHnkxOulUP1XzL6vdng7MBr6dGAIpqlJQookJ423xy7jSzGDM7Q6CTdx01P5JDF54iQEtiD_8m4Ep8yPQh2L7cVHDeU7kLkiZbS75eOGLnaLiEy0xYoIVqIU', '37571-IS'),
    // ('וופל מייקר' , 'waffle-makers', 349, 399,' מכשיר להכנת וופל בלגי המתאים ל 4 בו זמנית ', 'https://00e9e64bac510450c8e957c57f7bab5a709dc5cb1adffbd40e-apidata.googleusercontent.com/download/storage/v1/b/hamilton-beach-israel/o/hamilton-beach-images%2F26021%2F26021-1.jpg?qk=AD5uMEt4Xz-snTacJrYNZIPKqh4TS_nakh93TG1BilJ_pql8cENV2q_BlTSmy1_ZsKzXmzTLNqYMnaDLDeQvwZPsC5ytKrg1e6bdz7kOCe5Ib9N9JPfQfTPyoYcq9qxalnz3LMjub1XMgibLGW2ZKwIQqx9C9FavuuVnSoBUckNeMXmHuvTHv35icRIRkNYfGciP7BzvdHmkimi2LdZBDfxFUORyX4g0YJ4JJA6_HMeVze-EB5PIZCO5MBI3VGPVNBRxz78iNOrA8zBytdTT2AzqOUMn-DL6f2-ubl3Rfy4QGbbyY8grnEtOZZwcj8H_MCFgAsNhTxuj8sRq4sHF_Zuo6j-6v3AclzzsSUiBQV2CQBB3lQP7spqKSWwQAv2oL88N4ZD7nDLUf5e7JT-31qRcesAzP33vmmGcYPh_n-VzyCC5dtp97frHnDeZAR3MzC-fHzKUZ8q2BkwhKswAXcuOFVy_CgrY4prhC_ImpVE1kBBLagMkJARfsUyeE04zo8VMMBa87QGVbKb4vypC5TiisDPYsZgL7wOoGjMnDAuI52M7TZ754DHaaLhJLYS7BBHQX-FuLOdTrdsFGFrqxwnbhzoyKa7FSH33HwYnO18jtybO_VtmbKd4r1SiEVC5wQd-INr3UNfzJTuTQvN5IVapcQhNfXp3mepX0wuppN76f6f1o4IzFSkGecL5aDYjfK9rtJFz-ftVBSe_y3IVW51r6q_NCfw8zsl6yxyXkhfG6it5AX7NXNmBd1OHchCSTozG8_sCmvIeFg2qoXn-2tHwWa1W_JHZm8SFsYRw8qMs6sbemhIlxq2cU3N_yMMvNIklbbvYHp0F', '26021-IS'),
    // ('וופל מייקר' , 'waffle-makers', 299, 349,' מכשיר להכנת וופל בלגי המתאים ל 2 בו זמנית ', 'https://00e9e64bac0a91911486993c16d27c15ecfd96412d2e5dceda-apidata.googleusercontent.com/download/storage/v1/b/hamilton-beach-israel/o/hamilton-beach-images%2F22083%2F22083-1.jpg?qk=AD5uMEv_lX8cRBhXtm5plI4Tu8WMgXbxJRlFTmzyk9bzbK-VEL2qNwK2ceJUBj94ANoWI1pwqJKx2UBi2Sk6WuCKqJ5uekh2giAJagNTYEvW7w4rQKcya6Sc4JY2C2xfhdeVJ86T6HDh9jx9dcFuSyyrUcUyACRHGWv1iWQc82-B6ESbrsj3FD456EZoTuvt2vLbq2bQUNpXgUUYQnUxADUNURQbq-PJA4kFauSDVSbG9lFO4cBFVn-Tn31rfOhWvU-SXfXex31l7WTV8y2ZHfJRJsYl2cG6pHp47TTjS-MODkoOt8DL4-AB610B8QqQB9f3ABygJY5ssbE0-1djMr9zujrKUOmWjfwApzB-ACKAINwjF_gLPED5-wd88kjAqcIk3Ot38NJo9nnb2MaexYFwoCFFPfUcidkRWd_T6RwZ8LOMC4PbmmG7fd5A6dM1zgSo1JdPh07PuJYZwuoZtE5n-bZ6v2tSEbLVxKtDNlNaGyWvg8WqCak2mAdSxVmfbFZyfHK7qd4QBGQGQgeO_yn_X2dJEi8slTa2I9vVcZr7sDG-Cr-tycjMs3VaD50r1WQw03gZ_u5ACzUtKdXuPNxxDYBAODzUBbDiwtzVDsTyzXGDtxqoiCgKc0U_ILXKDzA23icH60Ou2YBh9-G_JNcog9kEW4asrUm93cW64qtqIyyIPn-CqoqMwHLTtJffQrp90Kc38SCrYJOV2QiXsh2VfuDAYc9WJ61YhSXJjgZ15H3DU9CaUyppvCNHbp1Jmv_6TVxv8odAhq0EuOQ_wQmvsA497icIp5XUxnJYr4Tjr5Fbno9Z9e5X7Ch7Fsfh_gyELxcQYajx', '22083-IS'),
    // ('טוסטר לחיצה' , 'toasters', 149, 179,'טוסטר שטוח קומפקטי', 'https://00e9e64bac4aae467c86cc88278127ddcaf11b262f5e8b0a3f-apidata.googleusercontent.com/download/storage/v1/b/hamilton-beach-israel/o/hamilton-beach-images%2F22082%2F22082-1.jpg?qk=AD5uMEvcGejoMI3fPg6ptcicaNrT9L3j5kA4lCH1d1NjUwak9x9EjrS0BRzUVoK9WshXMP-fIMwyQwjaZHS6NO-P6Jwdh57J4AsNurggI6oP8VwYp3-c-qEztJSxRQwgVCcn5pyEwpGskdpYdguoL7XRj5PEZSjmyoqNT67rerrjLaUuI_S6AE65QZdBBBVBTohLxVGb82xQ8CQfrlvBLByhfM0kfhbWGa8nDh41OrcUa79vmluUOYNxotqlYgK2aUcGPWbs920KBpUMr1ge-G3xWP_W76wwL2ZndLaHL-wWVbkl9LClKKt7Ijr9wN6lX-tFfxlDLflHvdVFUXAAr6uphpOIFiDDLgfZ8Nl4oYiupJ6B0iJVmyaGiFxKt0OLHJVjlH4Ylwg9kjhKOX2j-Q2obGRDnpJlDJE8d_kmT17RMr6jGSqdyPGwRyj1cnFAi86St9VAHBcvSGe1hXXdMJhamgHReT8F8GRnb89sMxGDPB7cXdUPeyYkjZKbU12hfKiBOWN1NtUcfLakLXr7dSkzq8Yt6UT2i5D234yuaoatysblWfqjuG4qqcvbaeKdqv4zQ-Q3M57mX5zvgV8j64GI_h7lYW_VPbTLxNTWp-VgKQ2ARXIzTME4iK329H0CXFnaMM7RKzGA_ASIVeqs7YftQF8Keyd0JTsrIUWREe8dyiyxDty3IBAADZik5HsKzIBwZYJwdVIBQabx0pdrJEqDfcVBXlD74_-rehHxDJRccIDVUihNHFrpXi_dGJqTmFU0auPKOzB09wKMK1ejMduyLa6rStei_fhoOAkprQWW-4UY4aIpgJcAQYyLu2QcQtBmKH1aBdLd', '22082-IS'),
    // ('מעבד מזון' , 'food-processors', 269, 319,' מעבד מזון ביתי עם שלל חלקים', 'https://00e9e64bacfaaea96be386ab435981d8a479f36269404a88ae-apidata.googleusercontent.com/download/storage/v1/b/hamilton-beach-israel/o/hamilton-beach-images%2F70450%2F70450-1.jpg?qk=AD5uMEsk4PN4VLpIwAdQTo-L7x99jTYNbgoGVeum9zSgHb4J-z55vvFP9L8SnoWUHcnYKnQuEDxVRYoqkejtQzNV_oqkagvNEAdG-2QUfog0uvtLIfZFIbqkpnn7GqLBI3B0wkJTpKsQjR9-C0MpJCjYiXVE2ruUGCvleGUz75ltLfhgploW4n4RlFar5Q62UcLa50eNAP4zfnCmHMlyoR8s2_nCZ04J50v9yZsLD5fJMbFKvH3ZaH-3sLyZjbNb-juzAvYgfpGZgC7qMwQj_ezMrz4qq_XOgHAMfEpR-G8QGJEH9Y2AOY5Oc46CobFeUGAXK24vDRZw26jKQ8hVJT-fUiIB6zZp-qMaga8ELvXtDv9B0GVGG5yKQSqAv7g4zYA6WrjqB-JqYiBevoM1Eg5N7XDZs9Jp-YIbBx7JlTZetRrNM5QG964b1fo6BpB0TUOhgTJ4aWBB23REr1W8YpWC4x8Cjk_szaIFf1e2pLwu8lbnZqJTryRcYoKUe585sIV8oyw75Bv515BWbyDeuG1qI03HcqVpcZod_tZcJQ1iHQQKN4DuQ2I8W4fLgq1imF63jbkNl1FFM5vZbfmYwCO5tT4pLjg3hHXtGwSHNt8jhc5gKb3DusRbDHUQjRoKdgffisVAf0qdhopUvMMvwPJ9f9VoIBPDUuu97lYfPIsh9yKlD8qxMW3cSPRA-_NHhb7ihFy5jjryTAIyUa6A7QvmQuvIZCm8QTX6MPX0-4jaqf6shgswOhX5hINI9IlcK_EnjseN1PDOblcabSLOfPNi9lzRlj3qQKwOFYXWsrWn6Mq3fzVl7eAHwGKJcWBYOra_KPRXgBod', '70450-IS'),
    // ('מסחת מיצים' , 'juicers', 579, 699,' מסחטת מיצים להכנת מיצים צלולים וסמיכים ', 'https://00e9e64bacbf10620d69d4f72c0dbab67a672325ef2be1ea73-apidata.googleusercontent.com/download/storage/v1/b/hamilton-beach-israel/o/hamilton-beach-images%2F67750%2F67750-1.jpg?qk=AD5uMEsTW5c3MFBCY5SHHDtIH2A3HHzrvjaLaZ9rs4WvX_umR84KzpOjEuGYvJPHBKB6_kc6U5xjg1LeePt5EKNF6vL-h51XJzYjINc9OsSDys2o-twMZz1fbLYhvUYlIeEvz7bgKLidia-oexJJ8hC7RbyOy4ai4vRn8v3rJJbe6ioxjh98yOPbSjqETgX0_id_14ttgml4dFR4ySHtRM5Ox1l2P296U6ax3QJrzbTk7nlewnV9ruKPBTyspBzP5lsLUyxK_Ljpza5nFm9WJcsjfMqbcDbY-wgacvCaDWWT-A8giHSj4DCqXqKSvhU6duLGb7zYOu3DMVNWp7sZM0KPFveaH9FzaI2yCqmRYHQRfoY8AVxXZm9YNPMpYOzpAdo9nvKoB6-tM2N_fNzwVXkPpd3pyci7rCo8S0zh_aqIG3NCwmFfEMmza7ZK4qOPyViZHKqVheiy9N9XDaSpZ2sxuS72-4GZJLlrA_6-KUPSRVe1DTgODIq4_Fen-6XDCeBI7D2IhS3cBV560eNkWmxsg9TwNuEWUYnSE7lD8x8HFm2mv0UUxm54htuMTJki3bjS5hNwgU78z3qUESHlCK16mV83CVJ_u6yg9JVYJYMF_vN1qTuKzIlqrI9pasd-VrpBpgP1keOVN89BVpaGJioU6Piin-XNPMdIASg5oreWWM0Vq6TQ62rmAYd6BDbXRpdZAd20ndATezaNGK4knygHwyLfDRitSxW5qtHke4lCNi2N9-oeDsQDA2iKRuGdrLJ-QLxde9PezeiLd0Hh8Acz0aM6exoK3hQa5wFKIv2gtpyHeIJahN9jOVtLHNcwxv6FWhVG_nh0', '67750-IS') ;

    