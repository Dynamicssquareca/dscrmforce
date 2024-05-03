import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const AboutUs = () => {
    const [isOpen, setOpen] = useState(false);
    const [open, setsOpen] = useState(false);
    return (
        <div>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="wVFZVajK2YI"
                onClose={() => setOpen(false)}
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <a data-bs-toggle="modal" onClick={() => setOpen(true)}>

                            <span className="cente-icns">
                                <img src="/img/play_icons.svg" alt="play_icons" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
