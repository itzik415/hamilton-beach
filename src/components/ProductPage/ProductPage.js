import React from 'react';
import ProductHeader from '../ProductPage/ProductHeader/ProductHeader';

const productPage = () => {
    return (
        <div className="productPage">
            <ProductHeader />
            <div className="row">
                <div className="my-5 col-12 col-sm-10 col-md-6 col-lg-5  mx-auto">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.hamiltonbeach.com/media/products/blender-chopper-58149.jpg" class="d-block w-100 mx-auto" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.hamiltonbeach.com/media/products/blender-chopper-58149-1.jpg" class="d-block w-100 mx-auto" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.hamiltonbeach.com/media/products/blender-chopper-58149-2.jpg" class="d-block w-100 mx-auto" alt="..."/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span aria-hidden="true"><ion-icon id="prev-arrow" name="arrow-dropleft-circle"></ion-icon></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span aria-hidden="true"><ion-icon id="next-arrow" name="arrow-dropright-circle"></ion-icon></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="accordion col-10 my-5 mx-auto p-0 border-none productPage-accordion" id="accordionExample">
                    <div className="card productPage-accordion-card">
                        <div className="card-header productPage-accordion-card-header" id="headingOne">
                            <h2 className="mb-0 productPage-accordion-card-header-title"> +
                                <button className="btn btn-link productPage-accordion-card-header-title-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               מפרט טכני
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne" className="collapse show productPage-accordion-card-collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body productPage-accordion-card-collapse-body">
                                    היה היה פרופ' למתמטיקה )מהסוג הנדיר שקשה מאוד למצוא היום....(
                            המורה הגיע יום אחד לכיתה וראה את תלמידיו צועקים ,מתנצחים ומעליבים זה את זה.
                            הוא ניגש ללוח, לקח גיר וצייר קו באורך 1 מ '. הוא ביקש מהתלמידים להציע הצעות                               כיצד לקצר את הקו בכל דרך שהיא.
                                    רובם הציעו למחוק מימין, משמאל, אחד הציע לקפל... ואז הדגיש המורה: לקצר את
                            הקו מבלי לגעת בו!
                                התלמידים נדהמו, חשבו, היה זה אתגר לא קל. הם התקשו למצוא פתרון. המורה ניגש
                                אל הלוח וצייר מעל הקו הקיים עוד קו, ארוך יותר מהקו שביקש לקצר. המורה הוסיף:
                                כדי ל"הקטין" מישהו, אינך צריך לפגוע, או להעליב אותו.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </div>
    )
}

export default productPage;