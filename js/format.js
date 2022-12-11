function tao_phan_cach_so(so_nguyen){
    var chuoi_the_hien="";
    var chuoi_so_nguyen=so_nguyen.toString();
    var so_ky_so= chuoi_so_nguyen.length;
    if(so_ky_so% 3==0){
        for(var chi_so=0;chi_so<chuoi_so_nguyen.length;chi_so++){
            chuoi_the_hien+=chuoi_so_nguyen[chi_so];
            if(chi_so % 3==2 && chi_so< chuoi_so_nguyen.length-1)
            chuoi_the_hien+="."
        }
    }else if(so_ky_so %3 ==1){
        chuoi_the_hien=chuoi_so_nguyen[0]
        if(so_ky_so>1)
        chuoi_the_hien+="."
        chuoi_so_nguyen=chuoi_so_nguyen.slice(1)
        for(var chi_so=0;chi_so< chuoi_so_nguyen.length;chi_so++){
        chuoi_the_hien+=chuoi_so_nguyen[chi_so]
        if(chi_so % 3==2 && chi_so<chuoi_so_nguyen.length-1)
        chuoi_the_hien+="."
    }
    }else if(so_ky_so % 3==2){
        chuoi_the_hien=chuoi_so_nguyen[0]+chuoi_so_nguyen[1]
        if(so_ky_so>2)
        chuoi_the_hien+="."
        chuoi_so_nguyen=chuoi_so_nguyen.slice(2)
        for(var chi_so=0;chi_so< chuoi_so_nguyen.length;chi_so++){
            chuoi_the_hien+=chuoi_so_nguyen[chi_so]
            if(chi_so % 3==2 && chi_so<chuoi_so_nguyen.length-1)
            chuoi_the_hien+="."
    }}
    return chuoi_the_hien
    }