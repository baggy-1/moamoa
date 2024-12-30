import { createClient } from '@/lib/supabase/server';

interface KakaoRequest {
  userRequest: {
    utterance: string;
    user: {
      id: string;
    };
  };
  action: {
    params: Record<string, string>;
  };
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const kakaoRequest = await request.json() as KakaoRequest;
    
    const userId = kakaoRequest.userRequest.user.id;
    const inputLink = kakaoRequest.action.params[entity.sysUrl];

    if (!inputLink) {
      return Response.json({
        version: "2.0",
        template: {
          outputs: [{
            simpleText: {
              text: "URL이 제공되지 않았습니다."
            }
          }]
        }
      });
    }

    const { data: user } = await supabase
      .from('users')
      .select('id, kakao_id')
      .eq('kakao_id', userId);

    const hasUser = user?.length && user.length > 0;
    let userDbId = hasUser ? user[0].id : null;

    if (!hasUser) {
      const { data: newUser, error: userError } = await supabase
        .from('users')
        .insert({ kakao_id: userId })
        .select('id')
        .single();
      
      if (userError) {
        return Response.json({
          version: "2.0",
          template: {
            outputs: [{
              simpleText: {
                text: "사용자 생성 중 오류가 발생했습니다."
              }
            }]
          }
        });
      }
      
      userDbId = newUser.id;
    }

    const { data: link, error: linkError } = await supabase
      .from('links')
      .insert({
        user_id: userDbId,
        url: inputLink,
      })
      .select('id')
      .single();

    if (linkError) {
      return Response.json({
        version: "2.0",
        template: {
          outputs: [{
            simpleText: {
              text: "링크 저장 중 오류가 발생했습니다."
            }
          }]
        }
      });
    }
    
    return Response.json({
      version: "2.0",
      template: {
        outputs: [{
          simpleText: {
            text: "링크가 성공적으로 저장되었습니다."
          }
        }]
      }
    });

  } catch (error) {
    console.error(error);
    return Response.json({
      version: "2.0",
      template: {
        outputs: [{
          simpleText: {
            text: "처리 중 오류가 발생했습니다."
          }
        }]
      }
    });
  }
}

const entity = {
  sysUrl: 'sys_url'
} as const;
