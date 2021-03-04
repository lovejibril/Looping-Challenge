    Loop1()    
    Loop2()
    Loop3()
    Loop4()
    Loop5()
    Loop6()
    Loop7()

    function Loop1(){
        document.write("<b> Loop  1 </b><br>" )
        for(i = 0; i < 5 ; i++){
            document.write(" I Love Homework <br>" )
        }
    }

    function Loop2(){
        document.write("<b> Loop  2 </b><br>" )
        for(i = 0; i < 5 ; i++){
            document.write(i + "<br>")
        }
    }
   
    function Loop3(){
        document.write("<b> Loop  3 </b><br>" )
        for(i = 15; i <= 30 ; i+=3){
            document.write(i+ "<br>")
        }
    }

    function Loop4(){
        document.write("<b> Loop  4 </b><br>" )

        for(i=0; i < 4; i++){
            for(j=0; j < 4; j++){
                document.write(" ⬜")
            }
            document.write("<br>")
        }
    }
    
    function Loop5(){
        document.write("<b> Loop  5 </b><br>" )
        for(i=1; i <= 7; i++ ){
            for(j = 0; j < i; j++){
                document.write("🦴")
            }
            document.write("<br>")
        }
    }

    function Loop6(){
        document.write("<b> Loop  6 </b><br>" )
        for(i = 0; i < 6; i++ ){
            for(j = 6; j > i; j--){
                document.write("~")
            }
            for(k = 0; k <= j ; k++){
                document.write("🦴")  
            } 
            document.write("<br>")
        }
    }

    function Loop7(){
        document.write("<b> Loop  7 </b><br>" )
        for(i = 2; i < 7 ;i++){
            for(j = 1; j < i; j++){
                for(k = 0; k < j; k++){
                    document.write("🦴")
                }
                document.write("<br>")
            }
            document.write("<br>")
            document.write("<br>")
        }
    }



    


