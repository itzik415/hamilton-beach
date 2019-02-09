import React from 'react';

const about = () => {
    return (
        <div className="about">
            <div className="about__section">
                <p className="about__section-type">אודות</p>
                <h1 className="about__section-title">שאוליאן סחר בע״מ</h1>
            </div>
            <div className="about-main">
                <h1 className="about-main-title">פרופיל חברת "שאוליאן סחר בע"מ" עוסק מורשה: 511436388</h1>
                <p className="about-main-paragraph">.משרד ראשי תצוגה ומחסני לוגיסטיקה נמצאים באבן יהודה. טל: 09-7409835/6</p>
                <p className="about-main-paragraph">.אולם תצוגה בהרצליה פיתוח שד' אבא אבן 12 מגדלי אקרשטיין. טל: 09-7990788</p>
                <p className="about-main-paragraph">.אתר החברה הרשמי<a id="website-link" rel="noopener noreferrer" href="http://www.shaoulian.co.il" target="_blank"> shaoulian.co.il</a> -</p>
                <p className="about-main-paragraph">:חברת שאוליאן נציגה בלעדית של מגוון רחב של מותגים</p>
                <p className="about-main-paragraph">.Hamilton Beach  מוצרי חשמל לבית ולמטבח מבית, <a id="website-link" rel="noopener noreferrer" href="http://www.hamilton-beach.co.il" target="_blank"> hamilton-beach.co.il</a> -</p>
                <p className="about-main-paragraph">.LOFRA  תנורים משולבים מקצועיים תוצרת איטליה, <a id="website-link" rel="noopener noreferrer" href="http://www.lofra.co.il" target="_blank"> lofra.co.il </a> -</p>
                <p className="about-main-paragraph">.SOL  כיריים קרמיות וגז ותנורי בילד אין תוצרת איטליה, <a id="website-link" rel="noopener noreferrer" href="http://www.sol.co.il" target="_blank">sol.co.il</a> -</p>
                <p className="about-main-paragraph">.TURBOAIR  קולטי אדים מיוחדים במינם תוצרת איטליה, <a id="website-link" rel="noopener noreferrer" href="http://www.turboair.co.il" target="_blank">turboair.co.il</a> -</p>
                <p className="about-main-paragraph">.VALERA טיפוח מקצועי וציוד לבתי מלון תוצרת שוויץ, <a id="website-link" rel="noopener noreferrer" href="http://www.valera.co.il" target="_blank">Valera.co.il </a> -</p>
                <p className="about-main-paragraph">.UFESA מוצרי חשמל לבית ולמטבח מבית, <a id="website-link" rel="noopener noreferrer" href="http://www.ufesa.co.il" target="_blank">ufesa.co.il</a> -</p>
                <p className="about-main-paragraph">.Boohr בלנדרים מקצועיים ומסחטות לפירות וירקות בריאותיים, <a id="website-link" rel="noopener noreferrer" href="http://www.boohr.co.il" target="_blank">Boohr.co.il</a> -</p>
                <p className="about-main-paragraph">.מוצרים של חברת שאוליאן נמכרים בפריסה ארצית ברשתות וחנויות מובחרות</p>
                <p className="about-main-paragraph">.מחלקה מיוחדת לדרישות אדריכלים וקבלנים. ייבוא מיוחד של כיריים ותנורים במגוון רחב  של גדלים וצורות</p>
                <p className="about-main-paragraph">.חברת שאוליאן עונה לצרכים המיוחדים של הצרכנים. מגוון המוצרים הרחב של החברה כולל מכשירים ביתיים גדולים וקטנים, מוצרי חשמל למטבח ומוצרי טיפוח</p>
                <p className="about-main-paragraph">פעילותה של החברה והתפתחותה נקבעים ע"י מצוינות עקבית של חדשנות ואיכות. אחד העקרונות החשובים ביותר של חברת שאוליאן הוא הנחישות לספק ללקוחותיה ערך מוסף אמיתי במונחים</p>
                <p className="about-main-paragraph">.של ביצועים, נוחות וידידותיים למשתמש ולסביבה. כך יוצרת החברה שביעות רצון ואמון בסיסי ארוך טווח של הלקוחות במוצרי החברה</p>
                <p className="about-main-paragraph">איכות המוצר אשר מייצגת את השילוב המושלם בין פונקציונליות, אלגנטיות ודירוג אנרגטי גבוה. מותגים שהחברה מייצגת משמעותם אומנות, אופי ועיצובים מיוחדים במינם. הסטייל האיטלקי</p>
                <p className="about-main-paragraph">.משלב מאפיינים אשר מוערכים בכל העולם</p>
                <p className="about-main-paragraph">.מתן שירות אמין וזמין זה עיקרון חשוב במעלה ראשונה בחברת שאוליאן</p>
                <img src={require("../../images/shaoulian-company-logo.jpg")} alt="shaoulian company logo" />
            </div>
        </div>
    )
}

export default about;