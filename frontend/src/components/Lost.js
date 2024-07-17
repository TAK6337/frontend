import React, { useState } from 'react';
import '../styles/Lost.css';
import NavigationBar from "./NavigationBar";

function Lost() {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const items = [
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        { category: '동물', name: '삼색 냥이', place: '옆집', date: '240717', status: '보관중' },
        { category: '동물', name: '강아지', place: '옆집', date: '240717', status: '반환완료' },
        { category: '기타', name: '오래된 분실물', place: '분실물센터앞', date: '200217', status: '경찰청 이관' },
        // 추가 항목들...
    ];

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const displayedItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="lost">
            <NavigationBar />
            <div className="lost-content">
                <div className="lost-top">
                    <div className="lost-top-shadow">
                        <div className="lost-top-main">
                            <div className="lost-top-btn-content">
                                <div className="lost-top-btn-title"># 가장 많이 찾는 분실물 테그</div>
                                <div className="lost-top-btns">
                                    <div className="lost-top-btns-2">
                                        <div className="lost-btn">
                                            <div className="lost-btn-type">고양이</div>
                                        </div>
                                        <div className="lost-btn2">
                                            <div className="lost-btn-type2">멍멍이</div>
                                        </div>
                                        <div className="lost-btn2">
                                            <div className="lost-btn-type2">삐약이</div>
                                        </div>
                                        <div className="lost-btn2">
                                            <div className="lost-btn-type2">팽귄</div>
                                        </div>
                                        <div className="lost-btn2">
                                            <div className="lost-btn-type2">가방</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="line-31"></div>
                            <div className="lost-date-cate">
                                <div className="lost-date">
                                    <div className="lost-date-start">
                                        <div className="lost-date-start-placeholder">습득일</div>
                                        <div className="calendar-frame">
                                            <img className="calendar" src="calendar0.svg" alt="calendar"/>
                                        </div>
                                    </div>
                                    <div className="lost-date-ing">~</div>
                                    <div className="lost-date-end">
                                        <div className="lost-date-end-placeholder">습득일</div>
                                        <div className="calendar-frame">
                                            <img className="calendar2" src="calendar1.svg" alt="calendar"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="lost-cate">
                                    <div className="lost-cate-placeholder">습득물</div>
                                    <div className="search-frame">
                                        <div className="search">search</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lost-title">분실물 찾기</div>
                </div>
                <div className="lost-police">
                    <div className="lost-police-container">
                        <div className="lost-police-ex">
                            <span>
                                <span className="lost-police-ex-span">
                                    ※분실물(유실물) 관할경찰서 이관시 경주경찰서 생활질서계 054)760-0379 또는 경찰청 유실물 통합포털사이트 로스트112에서 확인바랍니다.
                                    <br/>
                                </span>
                                <span className="lost-police-ex-span2">
                                    *분실물 보관기간 최대 6개월
                                </span>
                            </span>
                        </div>
                        <div className="lost-to-police-btn">
                            <div className="lost-to-police-btn-text">
                                경찰청 유실물 통합포털 바로가기
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lost-main-frame">
                    <div className="lost-main-frame-cate">
                        <div className="lost-main-frame-category-container">
                            <div className="lost-main-frame-category">분류</div>
                            <div className="lost-main-frame-dot"></div>
                        </div>
                        <div className="lost-main-frame-name-container">
                            <div className="lost-main-frame-name">습득물</div>
                            <div className="lost-main-frame-dot"></div>
                        </div>
                        <div className="lost-main-frame-place-container">
                            <div className="lost-main-frame-place">습득장소</div>
                            <div className="lost-main-frame-dot"></div>
                        </div>
                        <div className="lost-main-frame-date-container">
                            <div className="lost-main-frame-date">습득일</div>
                            <div className="lost-main-frame-dot"></div>
                        </div>
                        <div className="lost-main-frame-result-container">
                            <div className="lost-main-frame-result">처리결과</div>
                        </div>
                    </div>
                    <div className="lost-main-frame-items">
                        {displayedItems.map((item, index) => (
                            <div key={index} className="frame-item">
                                <div className="frame-945">
                                    <div className="div">{item.category}</div>
                                </div>
                                <div className="frame-9452">
                                    <div className="div2">{item.name}</div>
                                </div>
                                <div className="frame-947">
                                    <div className="frame-950">
                                        <img className="marker-pin-01" src="/images/marker-pin-01.png" alt="marker pin"/>
                                        <div className="div3">{item.place}</div>
                                    </div>
                                </div>
                                <div className="frame-946">
                                    <div className="lost-item-date">{item.date}</div>
                                </div>
                                <div className="frame-945">
                                    <div className="frame-952">
                                        <div className="div4">{item.status}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lost-page">
                    <div className="lost-left-arrow" onClick={handlePrevPage}>
                        <img className="chevron-left-double" src="/images/chevron-left-double.png" alt="previous double"/>
                        <img className="chevron-left" src="/images/chevron-left.png" alt="previous"/>
                    </div>
                    {[...Array(totalPages)].map((_, pageIndex) => (
                        <div key={pageIndex} className={`frame-${965 + pageIndex}`} onClick={() => setCurrentPage(pageIndex + 1)}>
                            <div className={currentPage === pageIndex + 1 ? 'active-page' : ''}>{pageIndex + 1}</div>
                        </div>
                    ))}
                    <div className="lost-right-arrow" onClick={handleNextPage}>
                        <img className="chevron-right" src="/images/chevron-right.png" alt="next"/>
                        <img className="chevron-right-double" src="/images/chevron-right-double.png" alt="next double"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lost;
