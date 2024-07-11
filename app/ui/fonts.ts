import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });
// Bug 修复：添加 weight 属性
export const lusitana = Lusitana({ weight: ['400','700'], subsets: ['latin'] });
