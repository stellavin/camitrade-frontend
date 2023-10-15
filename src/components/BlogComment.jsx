import React from 'react';
import SocialShare from '../components/SocialShare';
import { toast } from 'react-toastify';
import { HashLink as Link } from 'react-router-hash-link';
import authorImg from '/img/blog/authorImg.jpg'
import publicCommentImg1 from '/img/blog/publicCommentImg1.jpg'
import publicCommentImg2 from '/img/blog/publicCommentImg2.jpg'

const BlogComment = () => {

    const handleComment = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Comment Posted Successfully")
    }

    return (
        <>
            <div className="post-commenter-author">
                <div className="media">
                    <div className="media-left">
                        <div className="commenter-author-img">
                            <img src={authorImg} alt="authorImg" />
                        </div>
                    </div>
                    <div className="media-body">
                        <h3 className="comment-author">Will Marvin</h3>
                        <h4 className="comment-time">28 may 2023, 06:00 pm</h4>
                        <p>quisque interdum vulputate molestie, nibh conubia, vitae sed eget quod enim lorem doaLem tristique, mi vestibulum non congue aperiam nibh conubia, vitae sed</p>
                        <div className="author-soical-profile">
                            <SocialShare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="commenter-sec">
                <h2>2 comment</h2>
                <div className="media d-flex">
                    <img className=" me-3" src={publicCommentImg1} alt="publicCommentImg1" />
                    <div className="media-body">
                        <h3 className="comment-author">Jamel Grant <span className="replay-button">
                            <Link to="#">reply</Link></span>
                        </h3>
                        <h4 className="comment-time">28 may 2023, 06:00 pm</h4>
                        <p>quisque interdum vulputate molestie, nibh conubia, vitae sed eget quod enim lorem doaLem tristique, mi vestibulum non congue aperiam nibh conubia, vitae sed</p>
                        <div className="media d-flex mt-3">
                            <img src={publicCommentImg2} alt="publicCommentImg2" />
                            <div className="media-body">
                                <h3 className="comment-author">Eula Wolff<span className="replay-button">
                                    <Link to="#">reply</Link></span>
                                </h3>
                                <h4 className="comment-time">15 may 2023, 10:00 pm</h4>
                                <p>quisque interdum vulputate molestie, nibh conubia, vitae sed eget quod enilorem doaLem tristique, mi vestibulum non congue aperiam nibh conubia, vitae sed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment-field">
                <h2 className="comment-form-title">post a comment </h2>
                <form className="commentform" onSubmit={handleComment}>
                    <div className="row form-fields">
                        <p className="comment-author col-md-4">
                            <input placeholder="Name*" type="text" name='name' autoComplete='off' required /></p>
                        <p className="author-email col-md-4">
                            <input placeholder="Email*" type="email" name='email' autoComplete='off' required />
                        </p>
                        <p className="author-website col-md-4">
                            <input placeholder="Website*" type="text" name='website' autoComplete='off' required />
                        </p>
                    </div>
                    <p className="comment-form">
                        <textarea placeholder="Write Your Comment*" name='comment' autoComplete='off' cols="20" rows="5" required />
                    </p>
                    <p className="form-submit">
                        <button className='theme-btn theme-btn-1'>Post Comment</button>
                    </p>
                </form>
            </div>
        </>
    );
};

export default BlogComment;