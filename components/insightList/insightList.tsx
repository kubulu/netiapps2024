import React, { useState, useEffect } from 'react';
import styles from "./insightList.module.scss";
import { motion } from 'framer-motion';
import axios from 'axios';
import { ApiService } from "../../services/api.service";
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import moment from 'moment';

interface Blog {
    id: number;
    slug: string;
    acf: {
        image: string;
        title: string;
        category: { id: number; name: string; }[];
    };
    date: string;
}

interface Category {
    id: number;
    name: string;
}


export default function InsightList({ setFilterCategory, blogPage, blogList, filterCategory }: any) {
    const [categoryList, setCategoryList] = useState<Category[]>([]);
    const [showBlogList, setShowBlogList] = useState<Blog[]>([]);
    const [blogId, setBlogId] = useState<number | null>(null);
    const [showResetButton, setShowResetButton] = useState(false);
    const [hideLoadMore, setHideLoadMore] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null); // Add state for selected category


    const baseUrl = new ApiService();
    useEffect(() => {
        axios.get(baseUrl.getBaseUrl() + `/wp-json/wp/v2/categories?per_page=100`).then((response) => {
            setCategoryList(response.data);
        });

        setShowBlogList(blogList.slice(0, 6));
    }, [blogList]);

    useEffect(() => {
        setCookie('blogId', blogId);
    }, [blogId]);

    const viewMore = () => {
        const visibleItemsCount = showBlogList.length;
        const totalItems = blogList.length;

        const datatoLoad = [
            ...showBlogList,
            ...blogList.slice(visibleItemsCount, visibleItemsCount + 6)
        ];

        setShowBlogList(datatoLoad);
        const isAllItemsLoaded = datatoLoad.length === totalItems;
        setShowResetButton(isAllItemsLoaded);
        setHideLoadMore(isAllItemsLoaded);
    };

    const resetBlog = () => {
        setShowBlogList(blogList.slice(0, 6));
        setShowResetButton(false);
        setHideLoadMore(false);
        setSelectedCategoryId(null);
    };

    const filterByCategory = (categoryId: any) => {
        // console.log('Filtering by category ID:', categoryId);
        const filteredBlogs = blogList.filter((blog: { acf: { category: any[]; }; }) => {
            // console.log('Blog:', blog);
            // console.log('Blog categories:', blog.acf.category);
            return blog.acf.category && blog.acf.category.some(cat => cat.term_id === categoryId);
        });
        // console.log('Filtered Blogs:', filteredBlogs);
        setShowBlogList(filteredBlogs.slice(0, 6));
        setShowResetButton(filteredBlogs.length <= 6);
        setHideLoadMore(filteredBlogs.length <= 6);
        setSelectedCategoryId(categoryId);
    };

    return (
        <motion.div className={styles.insightList}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-10">
                        <div className={styles.industryBlock}>
                            <ul>
                                {categoryList.map((element: any, index: any) => (
                                    <li key={index} value={element.id} onClick={() => filterByCategory(element.id)} className={element.id === selectedCategoryId ? styles.selectedCategory : ''}>
                                        <img src={`/images/add.svg`} alt={`${element.name} icon`} /> {element.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.insightBlock}>
                            <div className="row">
                                {showBlogList.map((element: any, index: any) => (
                                    <div className="col-6" key={index}>
                                        <div className={styles.insightCard}>
                                            <div className={styles.InsightImg}>
                                                <a href={`blogs/${element.slug}`}>   
                                                    <img onClick={() => setBlogId(element.id)} src={element.acf.image} className={`img-fluid`} alt={element.acf.title} />   
                                                </a>
                                            </div>
                                            <div className={styles.InsightContent}>
                                                {/* <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className={`${styles.InsightCat} bgInvert`}>{element.acf?.category[0]?.name}</h4>
                                                    <span>{element.acf.category?.length > 1 ? '+' + element.acf.category.length : ''}</span>
                                                </div> */}
                                                <p>{moment(element.date).format('DD MMMM YYYY')}</p>
                                                <a href={`blogs/${element.slug}`}>                                                   
                                                    <h5 onClick={() => setBlogId(element.id)}>{element.acf.title}</h5>    
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {!hideLoadMore && (
                        <div>
                            <button className="btn btn-primary" onClick={viewMore}>View More</button>
                        </div>
                    )}
                    {showResetButton && (
                        <div>
                            <button className="btn btn-secondary" onClick={resetBlog}>Reset</button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
