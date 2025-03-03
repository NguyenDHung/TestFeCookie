import { useSearchParams } from 'react-router-dom';
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';

import SortIcon from '../../assets/SearchInHeader/sort.webp'
import Background from '../../assets/SearchInHeader/background.jpg'
import SearchResultItem from '../../components/SearchCampaign/SearchResultItem';
import { ApiSearchCampaign } from '../../api/SearchCampaign/ApiSearchCampaign';

function SearchResultPage() {
   const [searchParams] = useSearchParams()
   const query = searchParams.get('q');
   const [searchCampaignData, setSearchCampaignData] = useState([])
   const [filter, setFilter] = useState(0)
   const [pageIndex, setPageIndex] = useState(1)
   const [pagination, setPagination] = useState({
      PageSize: 12,
      TotalPage: 0,
      TotalCount: 0
   })

   const CallApiSearchCampaign = async (BlindBoxName, PageIndex, PageSize, SortOrder) => {
      const result = await ApiSearchCampaign({ BlindBoxName, PageIndex, PageSize, SortOrder })
      setSearchCampaignData(result?.data)
      if (result.status === 200) {
         const paginationData = JSON.parse(result?.headers?.get('x-pagination'))
         console.log('Pagination Data: ', paginationData);
         setPagination({
            ...pagination,
            TotalPage: paginationData.TotalPages,
            TotalCount: paginationData.TotalCount
         })
      }
   }

   const handlePageChange = (page) => {
      setPageIndex(page)
   };

   useEffect(() => {
      CallApiSearchCampaign(query, pageIndex, pagination.PageSize, filter)
   }, [filter, query, pageIndex])

   console.log(filter);

   return (
      <div style={{ backgroundImage: `url(${Background})` }}>
         <div className="w-[67rem] mx-auto px-[15px] min-h-[100vh]" >
            {/* Thông tin kết quả tìm kiếm */}
            <div className="p-[15px]]">
               <h1 className="text-[36px] mb-[10px] pt-[20px] font-bold">
                  Tìm thấy {searchCampaignData?.length || 0} sản phẩm Blind Box
               </h1>
            </div>
            {/* Phần cho voucher */}


            {/* Phần giao diện filter */}
            <div className="max-w-[36rem] mt-[40px] mb-[70px] mx-auto flex justify-center items-center">
               <p className="text-[20px] font-medium mr-[20px] ">
                  Sắp xếp theo:
               </p>
               <div className="grid grid-cols-6 gap-[25px]">
                  <div onClick={() => setFilter(0)} className={`${filter === 0 ? 'bg-[#FFDE50]' : 'bg-[#fff]'} group w-[3rem] h-[3rem] rounded-[50%] relative shadow-[0_5px_12px_0_rgba(0,0,0,0.35)] cursor-pointer`}>
                     <div className='w-full h-full bg-[${SortIcon}] bg-no-repeat bg-[length:270px] '
                        style={{ backgroundImage: `url(${SortIcon})`, backgroundPositionY: '11px', backgroundPositionX: '11px' }}
                     >
                     </div>
                     <span className='hidden group-hover:block absolute bottom-[-35px] leading-[23px] whitespace-nowrap rounded-[15px] bg-[#FFDE50] px-[20px] text-[13px] font-normal left-[50%] translate-x-[-50%] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] '>
                        Từ A-Z
                     </span>
                  </div>
                  <div onClick={() => setFilter(1)} className={`${filter === 1 ? 'bg-[#FFDE50]' : 'bg-[#fff]'} group w-[3rem] h-[3rem] rounded-[50%] relative shadow-[0_5px_12px_0_rgba(0,0,0,0.35)] cursor-pointer`}>
                     <div className='w-full h-full bg-[${SortIcon}] bg-no-repeat bg-[length:270px] '
                        style={{ backgroundImage: `url(${SortIcon})`, backgroundPositionY: '11px', backgroundPositionX: '-37px' }}
                     >
                     </div>
                     <span className='hidden group-hover:block absolute bottom-[-35px] leading-[23px] whitespace-nowrap rounded-[15px] bg-[#FFDE50] px-[20px] text-[13px] font-normal left-[50%] translate-x-[-50%] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] '>
                        Từ Z-A
                     </span>
                  </div>
                  <div onClick={() => setFilter(2)} className={`${filter === 2 ? 'bg-[#FFDE50]' : 'bg-[#fff]'} group w-[3rem] h-[3rem] rounded-[50%] relative shadow-[0_5px_12px_0_rgba(0,0,0,0.35)] cursor-pointer`}>
                     <div className='w-full h-full bg-[${SortIcon}] bg-no-repeat bg-[length:270px] '
                        style={{ backgroundImage: `url(${SortIcon})`, backgroundPositionY: '11px', backgroundPositionX: '-88px' }}
                     >
                     </div>
                     <span className='hidden group-hover:block absolute bottom-[-35px] leading-[23px] whitespace-nowrap rounded-[15px] bg-[#FFDE50] px-[20px] text-[13px] font-normal left-[50%] translate-x-[-50%] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] '>
                        Mới nhất
                     </span>
                  </div>
                  <div onClick={() => setFilter(3)} className={`${filter === 3 ? 'bg-[#FFDE50]' : 'bg-[#fff]'} group w-[3rem] h-[3rem] rounded-[50%] relative shadow-[0_5px_12px_0_rgba(0,0,0,0.35)] cursor-pointer`}>
                     <div className='w-full h-full bg-[${SortIcon}] bg-no-repeat bg-[length:270px] '
                        style={{ backgroundImage: `url(${SortIcon})`, backgroundPositionY: '11px', backgroundPositionX: '-137px' }}
                     >
                     </div>
                     <span className='hidden group-hover:block absolute bottom-[-35px] leading-[23px] whitespace-nowrap rounded-[15px] bg-[#FFDE50] px-[20px] text-[13px] font-normal left-[50%] translate-x-[-50%] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] '>
                        Bán chạy
                     </span>
                  </div>
                  <div onClick={() => setFilter(4)} className={`${filter === 4 ? 'bg-[#FFDE50]' : 'bg-[#fff]'} group w-[3rem] h-[3rem] rounded-[50%] relative shadow-[0_5px_12px_0_rgba(0,0,0,0.35)] cursor-pointer`}>
                     <div className='w-full h-full bg-[${SortIcon}] bg-no-repeat bg-[length:270px] '
                        style={{ backgroundImage: `url(${SortIcon})`, backgroundPositionY: '11px', backgroundPositionX: '-183px' }}
                     >
                     </div>
                     <span className='hidden group-hover:block absolute bottom-[-35px] leading-[23px] whitespace-nowrap rounded-[15px] bg-[#FFDE50] px-[20px] text-[13px] font-normal left-[50%] translate-x-[-50%] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] '>
                        Giá tăng
                     </span>
                  </div>
                  <div onClick={() => setFilter(5)} className={`${filter === 5 ? 'bg-[#FFDE50]' : 'bg-[#fff]'} group w-[3rem] h-[3rem] rounded-[50%] relative shadow-[0_5px_12px_0_rgba(0,0,0,0.35)] cursor-pointer`}>
                     <div className='w-full h-full bg-[${SortIcon}] bg-no-repeat bg-[length:270px] '
                        style={{ backgroundImage: `url(${SortIcon})`, backgroundPositionY: '11px', backgroundPositionX: '-232px' }}
                     >
                     </div>
                     <span className='hidden group-hover:block absolute bottom-[-35px] leading-[23px] whitespace-nowrap rounded-[15px] bg-[#FFDE50] px-[20px] text-[13px] font-normal left-[50%] translate-x-[-50%] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] '>
                        Giá giảm
                     </span>
                  </div>
               </div>
            </div>

            {/* Phần kết quả */}
            <div className='mx-[-10px] grid grid-cols-4 grid-rows-3 gap-y-[1.5rem]'>
               {/*  Ô kết quả tìm kiếm */}
               {
                  searchCampaignData?.map((item, index) => {
                     return (
                        <SearchResultItem key={index} data={item} />
                     )
                  })
               }
            </div>

            {/* Phân trang */}
            <div className={`${searchCampaignData?.length === 0 || searchCampaignData == undefined ? 'hidden' : ''} text-center py-[50px] flex justify-center scale-150`}>
               <Pagination defaultCurrent={pageIndex} total={pagination.TotalCount}
                  defaultPageSize={pagination.PageSize}
                  onChange={handlePageChange}
               />
            </div>

         </div>
      </div>
   )
}

export default SearchResultPage;