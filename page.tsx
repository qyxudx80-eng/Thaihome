export default async function Properties({searchParams}:{searchParams:Promise<{type?:string;area?:string;q?:string}>}) {
 const p=await searchParams;
 return <><header><div className="inner"><a className="brand" href="/">ThaiHome</a><nav><a href="/">返回首页</a></nav></div></header><main className="container"><h1>房源搜索</h1><p className="muted">搜索条件：{p.type||"全部类型"} · {p.area||"全部地区"} · {p.q||"无关键词"}</p><div className="panel">房源列表、价格筛选、卧室数、面积、排序和分页将在数据库接入阶段完成。</div></main></>;
}
