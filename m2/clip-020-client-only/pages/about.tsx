import { NextPage } from "next";

interface Props {
    //year: string;
}
export default function About() {
    return (
        <div className="container">
            <div id="content" className="content">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>
                <section className="contactInfo">
                    <h1 className="hTitle">Organizers</h1>
                    <br />
                    <div className="picture">
                        <img
                            src="//siliconvalley-codecamp.com/Images/organize01.jpg"
                            alt="image4"
                            width="300"
                        />
                    </div>
                    <br />
                    <br />
                    <p>
                        Silicon Valley Code Camp is put on by a dedicated group of
                        volunteers whose mission is to both provide the highest quality
                        content built around the topic of computer code, as well as create
                        an environment where shared knowledge is paramount. The volunteers
                        not only include the organizers, but all the speakers in Addition!!
                        {/*<br /> If you are interested in helping, send an email to:{' '}*/}
                        {/*<a href="mailto:Volunteers@siliconvalley-codecamp.com">*/}
                        {/*  Volunteers@siliconvalley-codecamp.com*/}
                        {/*</a>*/}
                    </p>
                    <h3 className="hTitle">Contact</h3>
                    <p>
                        For Additional Information, please email:{" "}
                        <a href="mailto:service2019@siliconvalley-codecamp.com">
                            service2019@siliconvalley-codecamp.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};


