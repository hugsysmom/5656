/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: '首頁', href: '/' },
  { label: '關於創元', href: '/about' },
  { label: '最新消息', href: '/news' },
  { label: '聯絡我們', href: '/contact' },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    date: '2026.05.01',
    category: '公司動態',
    title: '創元地熱台東開發案正式啟動，構築穩定的基礎負載電力',
    excerpt: '創元地熱今日宣布於台東地區之開發計畫正式進入鑽井階段...',
  },
  {
    id: '2',
    date: '2026.04.15',
    category: '產業新聞',
    title: '台灣淨零排放路徑圖：地熱發電成為第13項關鍵策略',
    excerpt: '政府將加強對地熱開發之補助與規範，推動潔淨能源多元化...',
  },
  {
    id: '3',
    date: '2026.03.20',
    category: '技術成果',
    title: '引進國際先進封閉式地熱系統(AGS)技術，大幅提升環境友善性',
    excerpt: '創元地熱與國際頂尖技術團隊簽署合作備忘錄，引進不需大量用水之取熱技術...',
  },
];
