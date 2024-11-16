import React from 'react';
import { Box, Button } from '@mui/material';
import './footer.css'
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
const CenteredBox = () => {
    return (
        <Box
            sx={{
                width: '95%',            // عرض باکس 80 درصد صفحه
                height: '600px',         // ارتفاع باکس 600 پیکسل
                margin: '0 auto',        // مرکز چین کردن باکس
                display: 'flex',         // برای استفاده از فلیکس باکس
                backgroundColor: '#fff', // رنگ پس‌زمینه (اختیاری)
                border: '1px solid #999',  // حاشیه (اختیاری)
                borderRadius: '20px',
                marginBottom:'50px'
            }}
        >
            <div className='org'>

                <div className='right-footer'>
                    <div className='photo-right'>
                    </div>
                    <div className='list-right'>
                        <ul className='ul-footer'>
                            <li className='li-footer'>معرفی کسب و کارها .</li>
                            <li className='li-footer'>شرایط و ضوابط .</li>
                            <li className='li-footer'> درباره ما .</li>
                            <li className='li-footer'> تماس با ما .</li>
                        </ul>
                    </div>
                </div>

                <div className='center-footer'>
                    <div className='titr'>
                        <h3> اپلیکیشن کارناوال </h3>
                    </div>

                    <div className='paragraph-center-footer'>
                        <p style={{ color: '#404040' }}>  در این اپلیکیشن شما دنیایی از امکانات و خدمات را همیشه و همه جا در جیب خود دارید؛ آشنایی با جاذبه‌های گردشگری، رزرو آنلاین بلیط هواپیما، رزرو هتل، ویلا و اقامتگاه بوم‌گردی، رزرو آنلاین تورهای داخلی و خارجی و سایر خدمات توریستی گردشگری همه در اپلیکیشن کارناوال . </p>
                    </div>

                    <div className='app-footer'>
                        <Button variant="contained" color="primary" style={{ width: '200px', height: '50px', backgroundColor: '#1de9b6', borderRadius: '30px' }}>
                         <AndroidIcon  style={{marginRight:'10px'}}/> Android
                        </Button>

                        <Button style={{ width: '200px', height: '50px', borderRadius: '30px', border: '1px solid #616161', color: 'black' }}>
                            <AppleIcon  style={{marginRight:'10px'}}/> ios
                        </Button>

                    </div>
                </div>

                <div className='left-footer'>

                    <div className='titr-left'>
                        <h3> تماس با کارناوال </h3>
                    </div>
                    <div className='paragraph'>
                        <p style={{ fontSize: '12px' }}> : پشتیبانی 8 صبح تا 1 بامداد   </p>
                        <h2>  09944001410 </h2>
                    </div>
                    <div className='photo-6'>
                        <div className='logo1'>
                            <img src="https://cdn.karnaval.ir/img/certificate/miras-logo.png" alt=""
                                style={{ width: '100px', height: '100px', borderRadius: '20px', border: '1px solid #d8d8d8' }} />
                            <img src=" #" alt="logo-samandehi" />
                            <img src=" https://cdn.karnaval.ir/img/certificate/cao.png" alt=""
                                style={{ width: '100px', height: '100px', borderRadius: '20px', border: '1px solid #d8d8d8' }} />
                        </div>

                        <div className='logo1'>
                            <img src="https://cdn.karnaval.ir/img/certificate/enamad-logo.png" alt=""
                                style={{ width: '100px', height: '100px', borderRadius: '20px', border: '1px solid #d8d8d8' }} />
                            <img src="https://cdn.karnaval.ir/img/certificate/passenger-rights.jpg " alt=""
                                style={{ width: '100px', height: '100px', borderRadius: '20px', border: '1px solid #d8d8d8' }} />
                            <img src="https://cdn.karnaval.ir/img/certificate/aira.jpg " alt=""
                                style={{ width: '100px', height: '100px', borderRadius: '20px', border: '1px solid #d8d8d8' }} />
                        </div>

                    </div>
                    <div className='box-end-footer-end'>
                        <p 
                        style={{ padding:'10px'}}> هدف اصلی کارناوال این است که بهترین خدمات گردشگری را به صورت آنلاین به کاربران خود ارائه دهد. هر آن چیزی که برای سفر خود نیاز دارید را از کارناوال بخواهید؛ از آشنایی با جاذبه ها، سوغات و غذاهای محلی تا رزرو آنلاین بلیط هواپیما و انواع اقامتگاه. در هر جا و در هر ساعت از شبانه روز، می توانید به صورت آنلاین خدمات سفر خود را رزرو کنید و یا هر سوالی دارید از ما بپرسید. کارناوال کنترل سفر شماست! </p>
                        <div className="continiot-boxNameFooter">
                        <div className="boxNameFooter"> بلیط هواپیما </div>
                        <div className="boxNameFooter"> رزرو ویلاشمال </div>
                        <div className="boxNameFooter"> خرید بلیط هواپیمای خارجی </div>
                        <div className="boxNameFooter"> رزرو هتل کیش </div>
                        <div className="boxNameFooter"> نقشه تهران </div>
                        <div className="boxNameFooter"> بلیط تهران مشهد </div>
                        </div>
                    
                    </div>

                    <div className="p-end">
                        <p style={{textAlign:'center'}}> 
                        کلیه حقوق مادی و معنوی کارناوال برای شرکت کاروان سفر های نیکسام محفوظ است. استفاده از محتوای سایت تنها در صورت پذیرش شرایط و ضوابط امکان پذیر است.


                        </p>
                    </div>
                </div>


            </div>

        </Box>
    );
};

export default CenteredBox;