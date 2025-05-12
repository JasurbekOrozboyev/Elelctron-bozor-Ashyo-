import { useState } from 'react';
import { Toolbar, Button } from '@mui/material';
import AuthModal from '../Auth/AuthModal';
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faScaleUnbalancedFlip, faHeart, faCartShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Icon from '../img/iconH/Icon.svg'
import Badge from '@mui/material/Badge';
import Categories from "@/category/categoryAll";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";


function Headers () {
    const [open, setOpen] = useState(false);
    return (
       <header className="container max-w-[1440px] m-auto">
        <div className='h-10 flex justify-between items-center bg-[#EBEFF3]'>
            <div className="hidden md:block">
                <ul className='flex justify-between items-center gap-7 p-4 ml-[130px]'>
                    <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Tashkent
                    </li>
                    <li>
                        <p>About Us</p>
                    </li>
                    <li>
                        <p>Products</p>
                    </li>
                    <li>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='flex justify-between items-center gap-7 md:p-4 mr-[80px]'>
                    <li className=" md:hidden block">
                    <div className="flex items-center">
                    <img src={Icon} className="w-34" alt="Icon" />
                    <p className='text-[27px] text-[#134E9B] font-bold'>Ashyo</p>
                    </div>
                    </li>
                    <li className="text-[14px] md:text-[16px]  w-[190px] h-[44px] flex justify-center items-center">
                        <p>+998(71) 123-45-67</p>
                    </li>
                    <li className="md:hidden block text-xl ml-[40px]">
                    <FontAwesomeIcon icon={faBars} />
                    </li>
                    <li className="md:block hidden">
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Til Tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectItem value="uz">Uz</SelectItem>
                            <SelectItem value="eng">Eng</SelectItem>
                            <SelectItem value="rus">Rus</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    </li>
                    <li>
                        <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Button variant="outlined" onClick={() => setOpen(true)}>Login</Button>
                        </Toolbar>

                    <AuthModal open={open} onClose={() => setOpen(false)} />
                    </li>
                </ul>
            </div>
        </div>
            <main className='h-22 flex justify-center items-center'>
                <div className='flex justify-between items-center gap-20'>
                    <ul className='flex items-center'>
                        <li className="md:block hidden">
                            <div className='flex items-center'> 
                                <img src={Icon} alt="Icon" />
                                <p className='text-[42px] text-[#134E9B] font-bold'>Ashyo</p>
                            </div>
                        </li>
                    </ul>
                    <ul className='flex items-center gap-[10px]'>
                        <li className="md:hidden">
                        <select className='w-30 h-10 ml-10 pl-2  bg-white rounded'>
                            <option value="#">Kategoriya 1</option>
                            <option value="#">Kategoriya 2</option>
                            <option value="#">Kategoriya 3</option>
                            <option value="#">Kategoriya 4</option>
                            <option value="#">Kategoriya 5</option>
                        </select>
                        </li>
                        <li className="md:block hidden">
                        <Select>
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder="Kategoriya" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectItem value="#">Kategoriya 1</SelectItem>
                            <SelectItem value="#">Kategoriya 2</SelectItem>
                            <SelectItem value="#">Kategoriya 3</SelectItem>
                            <SelectItem value="#">Kategoriya 4</SelectItem>
                            <SelectItem value="#">Kategoriya 5</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                        </li>
                        <li className='relative md:hidden'>
                        <Input className='w-[230px] h-12 mr-30 text-[12px]' type="search" placeholder="What are you looking for?"/>
                            <div className=' w-15 h-12 bg-[#134E9B] text-white flex justify-center items-center text-2xl rounded absolute top-0 right-30 '>
                            <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
                            </div>
                        </li>
                        <li className='relative md:block hidden'>
                        <Input className='w-[518px] h-12 border' type="search" placeholder="What are you looking for?"/>
                            <div className=' w-15 h-12 bg-[#134E9B] text-white flex justify-center items-center text-2xl rounded absolute top-0 right-0'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </li>
                    </ul>
                    <div className="md:block hidden">
                    <ul className="flex items-center gap-4">
                        <li className="w-[50px] h-[50px] flex justify-center items-center bg-[#EBEFF3] border rounded">
                        <Badge color="secondary" badgeContent={8}>
                        <FontAwesomeIcon className="text-[24px]" icon={faScaleUnbalancedFlip} />
                        </Badge>
                        </li>
                        <li className="w-[50px] h-[50px] flex justify-center items-center bg-[#EBEFF3] border rounded">
                        <Badge color="secondary" badgeContent={8}>
                        <FontAwesomeIcon className="text-[24px]" icon={faHeart} />
                        </Badge>
                        </li>
                        <li className="w-[50px] h-[50px] flex justify-center items-center bg-[#EBEFF3] border rounded">
                        <Badge color="secondary" badgeContent={8}>
                        <FontAwesomeIcon className="text-[24px]" icon={faCartShopping} />
                        </Badge>
                        </li>
                        <li className="w-[50px] h-[50px] flex justify-center items-center bg-[#EBEFF3] border rounded">
                        <Badge color="secondary" badgeContent={8}>
                        <FontAwesomeIcon className="text-[24px]" icon={faUser} />
                        </Badge>
                        </li>
                        
                    </ul>
                    </div>
                
                </div>
            </main>
            <div className="md:block hidden">
                <Categories/>
            </div>
        
       </header>
    )
}

export default Headers;