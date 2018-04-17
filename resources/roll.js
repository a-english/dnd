function roll(n, x, mod)
{
	var sum=0;
	for(i=0; i<n; i++)
	{
		sum+=Math.ceil(Math.random() * x);
	}
	sum+=mod;
	alert(sum);
}