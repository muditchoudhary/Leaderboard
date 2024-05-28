import leaderboardData from "../lib/leaderboard-data";

function Leaderboard() {
	const tableHeaders = Object.keys(leaderboardData[0]);
	console.log(tableHeaders);
	const priceCol = "Price (Rs)";
    const actionCol = "Action";
	return (
		<>
			<div className="h-full flex flex-col items-center">
				<h1 className=" text-6xl text-center py-6 px-4">LeaderBoards</h1>
				<div className="border-2 border-solid border-[#f596a1] w-3/4">
					<div className="bg-[#fef4f5] flex justify-between py-4 px-3">
						<h2 className="text-3xl font-bold text-[#f596a1] ">Basic Basket </h2>
						<div className="flex items-center bg-[#f496a0] border border-[#f596a1] rounded-md p-2 w-fit">
							<label className=" text-white mr-2 font-bold ">Slippage</label>
							<select className=" text-white border-none outline-none bg-transparent text-sm cursor-pointer">
								<option className="text-black">0%</option>
								<option className="text-black">0.5%</option>
								<option className="text-black">1%</option>
							</select>
						</div>
					</div>
					<table className=" w-full border-t-2 border-solid border-[#f596a1] ">
						<thead className=" text-left">
							<tr className=" border-b-2 border-solid border-[#ededed]">
								{tableHeaders.map((header, index) => (
									<th key={index} className="text-[#f596a1] p-3 text-lg border-r-2 border-solid border-[#ededed]">{header}</th>
								))}
							</tr>
						</thead>
						<tbody className="text-left text-[#404141]">
							{leaderboardData.map((row, index) => (
								<tr key={index} className=" text-base border-b-2 border-solid border-[#ededed]" >
									{Object.keys(row).map((col, index) => (
										<>
											{/* If column name is Price (Rs) then check if price is null or integet. If null render dash else the price itself */}
											{col === priceCol && (
												<>
													{row[col] === null && (
														<td key={index} className="p-3 border-r-2 border-solid border-[#ededed]">-</td>
													)}
													{row[col] !== null && (
														<td key={index} className="p-3 border-r-2 border-solid border-[#ededed]">
															{row[col]}
														</td>
													)}
												</>
											)}
											{/* If the colum name is not Pirce (Rs) then render the column value as in the json data */}
											{col !== priceCol && col !== actionCol && (
												<td key={index} className="p-3 border-r-2 border-solid border-[#ededed]">{row[col]}</td>
											)}
                                            {/* If the column is Action then add underline styling */}
                                            {col === actionCol && (
                                                <td key={index} className=" text-[#f596a1] p-3 border-r-2 border-solid border-[#ededed] underline cursor-pointer">{row[col]}</td>
                                            )}
										</>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default Leaderboard;
