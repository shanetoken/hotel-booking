function Logo() {
  return (
    <div className="w-full border-2 border-black items-center space-y-[1px]">
      <img className="pl-14" src="data:image/png;base64,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"></img>
      <h3 className="text-xl">Hotel Booking</h3>
    </div>
  );
}

export default Logo;
