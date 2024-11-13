let word = "Technology"; //output->ygolonhceT

let result = word.split("").reverse(); // bu output'u elde etmek ucu evvelce biz tringimizi arraya cevirmeliyik bunun ucunde split metodundan istifade olunur split metodunu daxilinde mutleq dirnaq yazilmalidir bu bizde  stringi nece arraya ayiracagimizi gosterir meselen biz dirnaq arasinda bosluq qoysaq  bizde tam butov stringi arraya cevirecek amma yazilmazsa sadece herfleri tek tek array kimi yazacaq
//arraya cevirdikden sonra biz array metodu olan reverse den arrayi ters cevimesini isteyirik burasi bele
console.log(result.join("")); // burada ise artiq arrayimize join metodunu cagiraraq birlesdirirk ve stringe cevirirk dirnaqlar arasindaki bosluga diqqetvetmek lazimdir eger boslug qalarsa ya splitde yada joinde bize reverse etmeden qayataracaq stringimizi.
