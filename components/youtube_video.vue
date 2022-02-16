<template>
    <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal"><span>x</span></button>
                    <iframe width="100%" src="" frameborder="0" allowscriptaccess="always" allow="autoplay" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .modal-open .modal {
        overflow-y: hidden;
        padding-left: 0 !important;
    }
    #videoModal.show {
        display: grid !important;
        min-width: 100% !important;
        align-items: center;
    }
    .modal-dialog {
        max-width: 100%;
        width: 100%;
        margin: 0 auto;
    }
    .modal-body {
        padding: 30px;
    }
    .modal-body iframe {
        min-height: calc(100vh - 60px);
    }
    .modal-content {
        background-color: #EBE5D5;
    }
    button.btn-secondary {
        background-color: #332B29;
        padding: 10px !important;
        border-color: #fff;
        line-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        text-align: center;
        position: absolute;
        top: 10px;
        right: 10px;
        &:after {
            display: none;
        }
        span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin-top: 0px;
            margin-left: 1px;
            font-family: auto;
        }
    }
    @media only screen and (max-width: 768px) {
        .modal-body iframe {
            min-height: 400px;
        }
        .modal-body {
            padding: 20px;
        }
        button.btn-secondary {
            right: 7px;
             span {
                font-size: 20px;
            }
        }
    }
</style>

<script>
export default {
    name: 'youtube-video',
    mounted() {
        var $videoSrc;  
        $('.video-btn').click(function() {
            $videoSrc = $(this).data( "src" );
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $(".modal-body iframe").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
        })
        
        // stop playing the youtube video when I close the modal
        $('#videoModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $(".modal-body iframe").attr('src',$videoSrc); 
        })

    }
}
</script>